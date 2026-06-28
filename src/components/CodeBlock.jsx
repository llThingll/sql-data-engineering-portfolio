function CodeBlock({ code }) {
  return (
    <pre className="code-scrollbar overflow-x-auto rounded-md border border-slate-800 bg-slate-950 p-4 text-sm leading-6 text-slate-200 shadow-glow">
      <code>{code}</code>
    </pre>
  );
}

export default CodeBlock;
