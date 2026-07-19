"use client";

import { useEffect, useState } from "react";

// Base64 of "+33 6 02 63 18 37" — same rationale as ObfuscatedEmailLink.
const PHONE_B64 = "KzMzIDYgMDIgNjMgMTggMzc=";

type Props = {
  className?: string;
};

export default function ObfuscatedPhone({ className }: Props) {
  const [phone, setPhone] = useState<string | null>(null);

  useEffect(() => {
    // Must decode post-mount only, never during render (incl. SSR), so the
    // number never lands in the static HTML.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setPhone(atob(PHONE_B64));
  }, []);

  return <span className={className}>{phone ?? "···"}</span>;
}
