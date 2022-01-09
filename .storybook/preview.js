import React from "react";
import { MemoryRouter } from "react-router-dom";

import { Colors } from "~/theme";
import ThemeProvider from "~/providers/ThemeProvider";
import ReduxProvider from "~/providers/ReduxProvider";

import { i18n, locale, locales } from "./i18next";

export const loaders = [
  () => ({
    store: require("~/store").AppStore,
  }),
];

export const decorators = [
  (Story) => <MemoryRouter>{Story()}</MemoryRouter>,

  (Story) => <ThemeProvider>{Story()}</ThemeProvider>,

  (Story) => <ReduxProvider>{Story()}</ReduxProvider>,
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: "dark",
    values: [{ name: "dark", value: Colors.dark }],
  },
  docs: { source: { type: "code" } },
  i18n,
  locale,
  locales,
};
