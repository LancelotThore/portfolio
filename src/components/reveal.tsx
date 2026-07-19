"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  id?: string;
  as?: "section" | "div";
  className?: string;
  children: React.ReactNode;
};

export default function Reveal({ id, as = "div", className, children }: Props) {
  const ref = useRef<HTMLElement>(null);
  const [ready, setReady] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      // Must check a browser-only API post-mount, never during render (incl.
      // SSR), so content stays visible outright for reduced-motion users.
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setVisible(true);
      return;
    }

    // Only switch to the hidden starting state once JS has actually mounted,
    // so the section stays visible by default if JS fails to load.
    setReady(true);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const revealClass = ready
    ? `transition-all duration-700 ease-out ${visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}`
    : "";
  const combinedClassName = `${className ?? ""} ${revealClass}`;

  if (as === "section") {
    return (
      <section
        id={id}
        ref={ref as React.RefObject<HTMLElement>}
        className={combinedClassName}
      >
        {children}
      </section>
    );
  }

  return (
    <div
      id={id}
      ref={ref as React.RefObject<HTMLDivElement>}
      className={combinedClassName}
    >
      {children}
    </div>
  );
}
