import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["fr", "en"],
  defaultLocale: "fr",
  // French lives at "/", English under "/en"
  localePrefix: "as-needed",
});
