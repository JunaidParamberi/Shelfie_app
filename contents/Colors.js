// Color scheme based on main colors #01b99f and #009dde for light and dark themes.

const BASE = "#01b99f";

const Light = {
  // primary / secondary
  primary: BASE,
  primaryLight: "#1ad4b8",
  primaryDark: "#019380",
  onPrimary: "#ffffff",

  secondary: "#009dde",
  secondaryLight: "#33b1e5",
  secondaryDark: "#007db1",
  onSecondary: "#ffffff",

  // button states
  button: {
    normal: BASE,
    pressed: "#019380",
    disabled: "#cfd6dd",
    text: "#ffffff",
    outline: "#e6e8eb",
    secondary: "#009dde",
    secondaryPressed: "#007db1",
    secondaryText: "#ffffff",
  },

  // surfaces & background
  background: "#f6f7f9",
  surface: "#ffffff",
  card: "#ffffff",
  cardPrimary: "#ffffff",
  cardSecondary: "#f8fafc",
  cardElevated: "#f0f4f8",
  cardOutline: "#e6e8eb",
  onCard: "#0f1720",
  onCardSecondary: "#0f1720",
  border: "#e6e8eb",

  // text
  textPrimary: "#0f1720",
  textSecondary: "#6b7280",
  muted: "#9aa4b2",
  placeholder: "#c2c8d0",
  title: "#0d1a26", // <-- Added title color for light theme

  // states
  success: "#01b99f",
  warning: "#ffb020",
  error: "#d93025",
  info: "#009dde",

  disabled: "#cfd6dd",
};

const Dark = {
  // primary / secondary
  primary: "#1ad4b8",
  primaryLight: "#33ecd0",
  primaryDark: BASE,
  onPrimary: "#00201c",

  secondary: "#33b1e5",
  secondaryLight: "#66c5eb",
  secondaryDark: "#009dde",
  onSecondary: "#001824",

  // button states
  button: {
    normal: "#1ad4b8",
    pressed: BASE,
    disabled: "#2b333a",
    text: "#00201c",
    outline: "#1f2a36",
    secondary: "#33b1e5",
    secondaryPressed: "#009dde",
    secondaryText: "#001824",
  },

  // surfaces & background
  background: "#05060a",
  surface: "#0b1220",
  card: "#0f1924",
  cardPrimary: "#0f1924",
  cardSecondary: "#0b1220",
  cardElevated: "#15202b",
  cardOutline: "#1f2a36",
  onCard: "#e6eef6",
  onCardSecondary: "#dbe9f5",
  border: "#1f2a36",

  // text
  textPrimary: "#e6eef6",
  textSecondary: "#98a2b3",
  muted: "#6b7482",
  placeholder: "#4b5563",
  title: "#ffffff", // <-- Added title color for dark theme

  // states
  success: "#01b99f",
  warning: "#ffd479",
  error: "#ff6b6b",
  info: "#009dde",

  disabled: "#2b333a",
};

const Colors = {
  base: BASE,
  light: Light,
  dark: Dark,

  // helper to pick theme object quickly
  get(theme = "light") {
    return theme === "dark" ? Dark : Light;
  },
};

export default Colors;
