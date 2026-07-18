import type { SVGProps } from "react";

export default function MenuIcon({
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
      <path
        d="M1 4h16M1 9h16M1 14h16"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
}
