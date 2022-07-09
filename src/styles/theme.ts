import { DefaultTheme } from "styled-components";

export const theme: DefaultTheme = {
  bgColor: { default: "black" },
  color: { default: "white" },
  borderColor: { default: "gray" },
};

export type Theme = typeof theme;
