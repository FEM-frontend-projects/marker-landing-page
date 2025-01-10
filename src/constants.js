export const COLORS = {
  turquise: 'hsl(179deg, 80%, 58%)',
  mediumBlue: 'hsl(206deg, 84%, 22%)',
  grey: 'hsl(225deg, 14%, 53%)',
  white: 'hsl(0deg, 0%, 100%)',
  darkBlue: 'hsl(230deg, 60%, 8%)',
  pink: 'hsl(343deg, 100%, 58%)',
};

const BREAKPOINTS = {
  tablet: 950,
  mobile: 450,
};

export const QUERIES = {
  tabletAndDown: `max-width: ${BREAKPOINTS.tablet / 16}rem`,
  mobleAndDown: `max-width: ${BREAKPOINTS.mobile / 16}rem`,
};
