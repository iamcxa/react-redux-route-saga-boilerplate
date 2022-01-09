export { default as i18n } from "../src/helpers/i18n";

import Locales from "~/locales";

export const locales = {};

Object.keys(Locales).forEach((l) => {
  locales[l] = Locales[l].name || l;
});

export const locale = "en";

