type Props = {
  index: string;
  title: string;
  description: string;
  stack: string[];
  href?: string;
  externalLinkLabel?: string;
  size?: "featured" | "list";
};

export default function ProjectRow({
  index,
  title,
  description,
  stack,
  href,
  externalLinkLabel,
  size = "featured",
}: Props) {
  const gridClass =
    size === "list" ? "md:grid-project-row-compact" : "md:grid-project-row";
  const titleClass = size === "list" ? "text-project-sm" : "text-project";

  const rowClassName = `grid grid-cols-1 gap-2 border-t border-divider py-7.5 transition-colors hover:bg-cream-hover md:items-baseline md:gap-8 ${gridClass}`;

  const content = (
    <>
      <span className="font-grotesk text-label text-ink-muted">{index}</span>
      <div>
        <p className={titleClass}>
          {title}
          {href && (
            <span
              aria-label={externalLinkLabel}
              className="ml-2 font-grotesk text-meta text-ink-muted"
            >
              ↗
            </span>
          )}
        </p>
        <p className="mt-2 font-grotesk text-body text-ink-soft md:max-w-160">
          {description}
        </p>
      </div>
      <span className="font-grotesk text-label text-ink-muted md:text-right">
        {stack.join(" · ")}
      </span>
    </>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={rowClassName}>
        {content}
      </a>
    );
  }

  return <div className={rowClassName}>{content}</div>;
}
