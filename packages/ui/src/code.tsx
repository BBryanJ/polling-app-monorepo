export function Code({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}): JSX.Element {
  return <code className={className}>{children} - using packages/ui/code</code>;
}
