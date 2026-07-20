import { Link } from "@/i18n/navigation";

type Props = {
  index: string;
  urlSlug?: string;
  title: string;
  description: string;
  stack: string[];
  size?: "featured" | "list";
};

export default function ProjectRow({
  index,
  urlSlug,
  title,
  description,
  stack,
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
        <p className={titleClass}>{title}</p>
        <p className="mt-2 font-grotesk text-body text-ink-soft md:max-w-160">
          {description}
        </p>
      </div>
      <span className="font-grotesk text-label text-ink-muted md:text-right">
        {stack.join(" · ")}
      </span>
    </>
  );

  if (urlSlug) {
    return (
      <Link href={`/projets/${urlSlug}`} className={rowClassName}>
        {content}
      </Link>
    );
  }

  return <div className={rowClassName}>{content}</div>;
}
