"use client";

import { useEffect, useState } from "react";

// Base64 of "lancelot.thore@gmail.com" — decoded client-side only, so the
// address never appears in plain text in the static HTML that scrapers read.
const EMAIL_B64 = "bGFuY2Vsb3QudGhvcmVAZ21haWwuY29t";

type Props = {
  className?: string;
  children?: React.ReactNode;
};

export default function ObfuscatedEmailLink({ className, children }: Props) {
  const [email, setEmail] = useState<string | null>(null);

  useEffect(() => {
    // Must decode post-mount only, never during render (incl. SSR), so the
    // address never lands in the static HTML.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setEmail(atob(EMAIL_B64));
  }, []);

  return (
    <a href={email ? `mailto:${email}` : undefined} className={className}>
      {children ?? email ?? "···"}
    </a>
  );
}
