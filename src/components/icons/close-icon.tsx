import type { SVGProps } from "react";

export default function CloseIcon({
  className,
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 18 18"
      fill="none"
      aria-hidden="true"
      className={`size-5 ${className ?? ""}`}
      {...props}
    >
      <path d="M2 2l14 14M16 2 2 16" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}
