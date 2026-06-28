export const caseStudies = [
  {
    label: 'Caso 1',
    title: 'Monthly Consumption by Product',
    description: 'Cálculo de consumo mensual agrupado por producto y período para alimentar un reporte.',
    code: `SELECT
  ProductId,
  DATEFROMPARTS(YEAR(MovementDate), MONTH(MovementDate), 1) AS PeriodMonth,
  SUM(Quantity) AS MonthlyConsumption
FROM fact.InventoryMovement
WHERE MovementType = 'CONSUMPTION'
GROUP BY ProductId, DATEFROMPARTS(YEAR(MovementDate), MONTH(MovementDate), 1);`,
    highlights: ['Agrupación por período', 'Base para Power BI', 'Reglas de consumo explícitas'],
  },
  {
    label: 'Caso 2',
    title: 'Project Type Ratios',
    description: 'Cálculo y mantenimiento de ratios por tipo de proyecto, incluyendo escenarios donde no existen datos previos.',
    code: `WITH ProjectTotals AS (
  SELECT ProjectTypeCode, SUM(EstimatedHours) AS TotalHours
  FROM fact.ProjectActivity
  GROUP BY ProjectTypeCode
)
SELECT
  pt.ProjectTypeCode,
  COALESCE(pt.TotalHours, 0) AS TotalHours,
  COALESCE(pt.TotalHours / NULLIF(SUM(pt.TotalHours) OVER (), 0), 0) AS ParticipationRatio
FROM ProjectTotals pt;`,
    highlights: ['Manejo de ausencia de datos', 'Ratios auditables', 'Listo para tabla dimensional'],
  },
  {
    label: 'Caso 3',
    title: 'Stock Coverage Analysis',
    description: 'Consulta para calcular cobertura de stock usando stock disponible, órdenes de compra y consumo promedio mensual.',
    code: `SELECT
  s.ProductId,
  s.AvailableQty,
  COALESCE(po.OpenPurchaseQty, 0) AS OpenPurchaseQty,
  c.AvgMonthlyConsumption,
  (s.AvailableQty + COALESCE(po.OpenPurchaseQty, 0))
    / NULLIF(c.AvgMonthlyConsumption, 0) AS CoverageMonths
FROM rpt.StockSnapshot s
LEFT JOIN rpt.OpenPurchaseOrders po
  ON po.ProductId = s.ProductId
LEFT JOIN rpt.AverageConsumption c
  ON c.ProductId = s.ProductId;`,
    highlights: ['LEFT JOIN para datos opcionales', 'NULLIF evita division por cero', 'Indicador de cobertura'],
  },
  {
    label: 'Caso 4',
    title: 'ETL Validation with Insert / Update Logic',
    description: 'Validacion de registros nuevos, modificados y sin cambios antes de sincronizar una tabla final.',
    code: `SELECT
  src.CustomerCode,
  CASE
    WHEN tgt.CustomerCode IS NULL THEN 'INSERT'
    WHEN CHECKSUM(src.CustomerName, src.SegmentCode) <>
         CHECKSUM(tgt.CustomerName, tgt.SegmentCode) THEN 'UPDATE'
    ELSE 'NO_CHANGE'
  END AS SyncAction
FROM stg.Customer src
LEFT JOIN dim.Customer tgt
  ON tgt.CustomerCode = src.CustomerCode;`,
    highlights: ['Prevalidación ETL', 'Separación de acciones', 'Control antes de sincronizar'],
  },
];
