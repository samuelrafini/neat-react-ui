import { createGlobalStyle, DefaultTheme } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
  ${reset}
`;

const defaultTheme: DefaultTheme = {
  colors: {
    /* our base color generally */
    base: '#707070',
    baseLt: '#C5C5C5',
    baseDk: '#444141',
    /* primary brand color */
    primary: '#1E55A2',
    primaryLt: '#2265AD',
    primaryDk: '#1A4E97',
    /* secondary brand color */
    secondary: '#7F4098',
    secondaryLt: '',
    secondaryDk: '',
    /* third brand color */
    third: '#D91C5C',
    thirdLt: '#F069A7',
    thirdDk: '',
    /* extra */
    extra: '#F26522',
    extraLt: '',
    extraDk: '',
    /* neutrals */
    white: '#FFFFFF',
    black: '#000000',
  },
  fontSize: {
    /* base font size - applied at body / html level */
    base: 18,
    /* large font sizes */
    giga: 60,
    mega: 50,
    kilo: 40,
    deci: 30,
    centi: 25,
    milli: 20,
    micro: 14,
    nano: 12,
  },
  fontFamily: {
    base: 'Montserrat, sans-serif',
    alpha: '',
    beta: '',
  },
};

const mobileSize = {
  mobileS: 'min-width: 300px',
  mobileM: 'min-width: 375px',
  mobileL: 'min-width: 425px',
  tablet: 'min-width: 768px',
  laptop: 'min-width: 1024px',
  laptopL: 'min-width: 1440px',
  desktopM: 'min-width: 1920px',
  desktopL: 'min-width: 2560px',
};

export { GlobalStyle, mobileSize, defaultTheme };
