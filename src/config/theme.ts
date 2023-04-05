const spaces = {
  1: "5px",
  2: "10px",
  3: "15px",
  4: "20px",
  5: "25px",
  6: "30px",
  12: "60px",
} as const;

const radius = {
  full: "50%",
} as const;

const colors = {
  bg: "#ebe9e7",
  black: "#222222",
  blue: "#3d5071",
  gray: "#7d7d7d",
  grayDark: "#595959",
} as const;

const avatar = {
  medium: "64px",
} as const;

export const theme = {
  spaces,
  radius,
  colors,
  avatar,
} as const;
