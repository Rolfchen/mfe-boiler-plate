const primaryFontFamily = [
  "Nunito Sans",
  "Helvetica Neue",
  "Arial",
  "sans-serif",
].join(",");

const typography = {
  fontFamily: primaryFontFamily,
  headingFontFamily: primaryFontFamily,
  h1: {
    fontFamily: primaryFontFamily,
    fontWeight: 700,
  },
  h2: {
    fontFamily: primaryFontFamily,
    fontWeight: 700,
  },
  h3: {
    fontFamily: primaryFontFamily,
    fontWeight: 600,
  },
  h4: {
    fontFamily: primaryFontFamily,
    fontWeight: 600,
  },
  h5: {
    fontFamily: primaryFontFamily,
  },
  h6: {
    fontFamily: primaryFontFamily,
  },
};

const colors = {
  fairFarmsGreen: "#86B109",
  fairFarmsDarkGreen: "#355701",
  textDarkBlack: "#222222",
  backgroundGrey: "#f2f5fa",
  darkGrey: "#999999",
  lightGrey: "#777777",
  disabledGrey: "#dedede",
  iconGrey: "#B9B9B9",
};

const palette = {
  primary: {
    main: colors.fairFarmsGreen,
    dark: colors.fairFarmsDarkGreen,
    light: colors.lightGrey,
  },
  grey: {
    "200": colors.backgroundGrey,
    "300": colors.iconGrey,
    "400": colors.lightGrey,
    "600": colors.disabledGrey,
    "800": colors.darkGrey,
    "900": colors.textDarkBlack,
  },
  text: {
    primary: colors.textDarkBlack,
  },
};

export const theme = {
  typography,
  palette,
};

export default theme;
