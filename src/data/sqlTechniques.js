export const sqlTechniques = [
  {
    title: 'Stored Procedures',
    category: 'SQL Server',
    description: 'Encapsulan reglas de negocio y consultas reutilizables para procesos ETL o reportes parametrizados.',
    code: `CREATE OR ALTER PROCEDURE rpt.usp_MonthlySalesSummary
  @PeriodStart date,
  @PeriodEnd date
AS
BEGIN
  SET NOCOUNT ON;

  SELECT
    ProductCode,
    SUM(NetAmount) AS TotalAmount,
    COUNT(*) AS TransactionCount
  FROM fact.Sales
  WHERE SaleDate >= @PeriodStart
    AND SaleDate < DATEADD(day, 1, @PeriodEnd)
  GROUP BY ProductCode;
END;`,
    whenToUse: 'Cuando una consulta se repite, requiere parámetros o debe ejecutarse desde una herramienta de reportería o scheduler.',
    bestPractices: ['Usar SET NOCOUNT ON.', 'Validar parámetros de entrada.', 'Nombrar schemas según propósito: stg, dim, fact, rpt.'],
  },
  {
    title: 'Common Table Expressions / CTE',
    category: 'Query design',
    description: 'Ayudan a separar pasos logicos de una consulta compleja sin crear objetos permanentes.',
    code: `WITH MonthlyConsumption AS (
  SELECT
    ProductId,
    DATEFROMPARTS(YEAR(ConsumptionDate), MONTH(ConsumptionDate), 1) AS PeriodMonth,
    SUM(Quantity) AS ConsumedQty
  FROM stg.ProductConsumption
  GROUP BY ProductId, DATEFROMPARTS(YEAR(ConsumptionDate), MONTH(ConsumptionDate), 1)
)
SELECT ProductId, PeriodMonth, ConsumedQty
FROM MonthlyConsumption
WHERE ConsumedQty > 0;`,
    whenToUse: 'Cuando necesitas hacer la consulta más legible o reutilizar un resultado intermedio dentro de la misma sentencia.',
    bestPractices: ['Mantener nombres descriptivos.', 'Evitar demasiadas CTEs anidadas.', 'Revisar el plan si el volumen es alto.'],
  },
  {
    title: 'CROSS APPLY',
    category: 'Advanced joins',
    description: 'Permite aplicar una subconsulta o funcion por cada fila de la tabla principal.',
    code: `SELECT
  p.ProductId,
  p.ProductName,
  lastMove.LastMovementDate,
  lastMove.LastQuantity
FROM dim.Product p
CROSS APPLY (
  SELECT TOP (1)
    MovementDate AS LastMovementDate,
    Quantity AS LastQuantity
  FROM fact.InventoryMovement m
  WHERE m.ProductId = p.ProductId
  ORDER BY MovementDate DESC
) lastMove;`,
    whenToUse: 'Cuando necesitas calcular el mejor registro relacionado por fila, como último movimiento, primer evento o ranking contextual.',
    bestPractices: ['Indexar columnas de busqueda.', 'Usar TOP con ORDER BY claro.', 'Evaluar OUTER APPLY si quieres conservar filas sin match.'],
  },
  {
    title: 'MERGE',
    category: 'ETL sync',
    description: 'Sincroniza datos de origen con una tabla destino usando reglas de insercion y actualizacion.',
    code: `MERGE dim.ProjectType AS target
USING stg.ProjectType AS source
  ON target.ProjectTypeCode = source.ProjectTypeCode
WHEN MATCHED AND target.ProjectTypeName <> source.ProjectTypeName THEN
  UPDATE SET
    ProjectTypeName = source.ProjectTypeName,
    UpdatedAt = SYSUTCDATETIME()
WHEN NOT MATCHED BY TARGET THEN
  INSERT (ProjectTypeCode, ProjectTypeName, CreatedAt)
  VALUES (source.ProjectTypeCode, source.ProjectTypeName, SYSUTCDATETIME());`,
    whenToUse: 'Cuando una carga debe insertar nuevos registros y actualizar cambios detectados en un mismo flujo.',
    bestPractices: ['Probar duplicados en el origen.', 'Auditar filas afectadas.', 'Usar transacciones para cargas críticas.'],
  },
  {
    title: 'Window Functions',
    category: 'Analytics',
    description: 'Calculan rankings, acumulados y comparaciones sin perder el detalle de cada fila.',
    code: `SELECT
  ProductId,
  PeriodMonth,
  ConsumedQty,
  AVG(ConsumedQty) OVER (
    PARTITION BY ProductId
    ORDER BY PeriodMonth
    ROWS BETWEEN 2 PRECEDING AND CURRENT ROW
  ) AS MovingAvg3Months
FROM rpt.MonthlyConsumption;`,
    whenToUse: 'Cuando necesitas acumulados, promedios móviles, ranking o comparaciones por partición.',
    bestPractices: ['Definir PARTITION BY y ORDER BY explicitamente.', 'Controlar ventanas de calculo.', 'Revisar sort costs en planes grandes.'],
  },
  {
    title: 'Temporary Tables',
    category: 'ETL workflow',
    description: 'Guardan resultados intermedios durante una sesión o procedimiento para simplificar cargas por etapas.',
    code: `SELECT
  ProductId,
  SUM(AvailableQty) AS AvailableQty
INTO #StockByProduct
FROM stg.WarehouseStock
GROUP BY ProductId;

CREATE INDEX IX_StockByProduct_ProductId ON #StockByProduct(ProductId);

SELECT ProductId, AvailableQty
FROM #StockByProduct
WHERE AvailableQty > 0;`,
    whenToUse: 'Cuando un proceso requiere varias transformaciones o un resultado intermedio se consulta más de una vez.',
    bestPractices: ['Crear índices si la tabla temporal crece.', 'Mantener columnas necesarias.', 'Eliminar o reutilizar conscientemente.'],
  },
  {
    title: 'COALESCE / NULL handling',
    category: 'Data quality',
    description: 'Evita que valores nulos rompan calculos o generen resultados inesperados en reportes.',
    code: `SELECT
  ProductId,
  COALESCE(ConfirmedPurchaseQty, 0) AS ConfirmedPurchaseQty,
  COALESCE(AverageMonthlyConsumption, 0) AS AverageMonthlyConsumption,
  CASE
    WHEN COALESCE(AverageMonthlyConsumption, 0) = 0 THEN NULL
    ELSE AvailableStock / AverageMonthlyConsumption
  END AS CoverageMonths
FROM rpt.StockInputs;`,
    whenToUse: 'Cuando una columna puede venir incompleta y necesitas una regla explicita para calculos o visualizaciones.',
    bestPractices: ['No ocultar nulos significativos.', 'Documentar defaults.', 'Evitar dividir por cero.'],
  },
  {
    title: 'LEFT JOIN vs INNER JOIN',
    category: 'Data modeling',
    description: 'Define si quieres conservar registros sin coincidencia o solo aquellos con relación válida.',
    code: `SELECT
  p.ProductCode,
  p.ProductName,
  c.CategoryName
FROM dim.Product p
LEFT JOIN dim.Category c
  ON c.CategoryId = p.CategoryId;

SELECT
  s.SaleId,
  p.ProductCode,
  s.NetAmount
FROM fact.Sales s
INNER JOIN dim.Product p
  ON p.ProductId = s.ProductId;`,
    whenToUse: 'LEFT JOIN sirve para auditorías y datos opcionales; INNER JOIN sirve cuando la relación es obligatoria para el resultado.',
    bestPractices: ['Revisar cardinalidad.', 'Filtrar columnas del lado derecho con cuidado.', 'Identificar nulos esperados vs errores de integración.'],
  },
  {
    title: 'Query Optimization Basics',
    category: 'Performance',
    description: 'Mejora consultas revisando filtros, índices, columnas retornadas y plan de ejecución.',
    code: `SELECT
  ProductId,
  PeriodMonth,
  ConsumedQty
FROM rpt.MonthlyConsumption
WHERE PeriodMonth >= '2026-01-01'
  AND PeriodMonth < '2026-07-01'
  AND ProductId = 1204;

-- Index suggested for frequent filters:
-- CREATE INDEX IX_MonthlyConsumption_Product_Period
-- ON rpt.MonthlyConsumption(ProductId, PeriodMonth)
-- INCLUDE (ConsumedQty);`,
    whenToUse: 'Siempre que una consulta alimente reportes frecuentes, procese muchos datos o tenga tiempos variables.',
    bestPractices: ['Evitar SELECT *.', 'Usar filtros sargables.', 'Comparar lecturas lógicas antes y después.'],
  },
];
