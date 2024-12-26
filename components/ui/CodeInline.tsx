export function CodeInline({ children, ...props }: { children: string }) {
  return (
    <code className="not-prose" {...props}>
      {children}
    </code>
  );
}
