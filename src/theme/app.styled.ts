const size = {
  mobile: '425px',
  tablet: '768px',
  laptop: '1024px',
  desktop: '1440px',
};

export const device = {
  mobile: `(min-width: ${size.mobile})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  desktopL: `(min-width: ${size.desktop})`,
};

export const theme = {
  bold: 700,
  regular: 500,
  white: '#fff',
  grey: '#2e3554',
  pinkHighlight: '#ff0095',
  greenHighlight: '#00ffff',
  greenGlowBoxShadow: '0 0 10px rgba(81,203,238,1)',
  // transitions
  basicTransition: 'all .2s linear',
  // base button styles
  background: {
    primary: 'transparent',
    action: '#6198f3',
    warning: 'transparent',
    default: '#63cd94',
  },
  font: {
    primary: '#6198f3',
    action: '#fff',
    warning: '#eb3b51',
    default: '#fff',
  },
  border: {
    primary: '#6198f3',
    action: '#6198f3',
    warning: 'transparent',
    default: '#63cd94',
  },
  backgroundHover: {
    primary: '#6198f3',
    action: '#317efd',
    warning: '#eb3b51',
    default: 'transparent',
  },
  fontHover: {
    primary: '#fff',
    action: '#fff',
    warning: '#fff',
    default: '#63cd94',
  },
  borderHover: {
    primary: '#6198f3',
    action: '#317efd',
    warning: '#eb3b51',
    default: '#63cd94',
  },
};
