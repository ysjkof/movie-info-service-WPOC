export const theme = {
  bgColor: { black: "black", blue: "#0b071c" },
  color: { default: "white" },
  borderColor: { default: "gray" },
  button: {
    bgColor: { activity: "white", inactivity: "black" },
    color: { activity: "black", inactivity: "gray" },
  },
};

export type Theme = typeof theme;
