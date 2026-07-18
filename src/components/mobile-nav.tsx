"use client";

import { useEffect, useState } from "react";
import CloseIcon from "./icons/close-icon";
import MenuIcon from "./icons/menu-icon";

type NavLink = { href: string; label: string };

type Props = {
  links: NavLink[];
  menuLabel: string;
};

export default function MobileNav({ links, menuLabel }: Props) {
  const [mounted, setMounted] = useState(false);
  const [entered, setEntered] = useState(false);

  const close = () => setEntered(false);

  useEffect(() => {
    if (!mounted) return;
    const frame = requestAnimationFrame(() => setEntered(true));
    return () => cancelAnimationFrame(frame);
  }, [mounted]);

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-label={menuLabel}
        aria-expanded={mounted}
        onClick={() => (mounted ? close() : setMounted(true))}
        className="relative flex size-9 cursor-pointer items-center justify-center border border-ink"
      >
        <MenuIcon
          className={`absolute transition duration-300 ease-in-out ${
            entered ? "rotate-45 opacity-0" : "rotate-0 opacity-100"
          }`}
        />
        <CloseIcon
          className={`absolute transition duration-300 ease-in-out ${
            entered ? "rotate-0 opacity-100" : "-rotate-45 opacity-0"
          }`}
        />
      </button>
      {mounted && (
        <nav
          onTransitionEnd={(event) => {
            if (event.propertyName === "opacity" && !entered) {
              setMounted(false);
            }
          }}
          className={`fixed inset-x-0 top-21 bottom-0 z-10 flex flex-col items-center justify-center gap-10 bg-cream text-project transition duration-200 ease-in-out ${
            entered
              ? "translate-y-0 opacity-100"
              : "pointer-events-none -translate-y-2 opacity-0"
          }`}
        >
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={close}>
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </div>
  );
}
