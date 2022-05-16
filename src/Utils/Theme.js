import { createTheme } from '@material-ui/core/styles';

const colors = {
  Dark: {
    background: '#000',
    typo: '#fff',
  },
  Light: {
    background: '#ccc',
    typo: '#000',
  },
};
const createCustomTheme = (direction, themeMode) =>
  createTheme({
    direction: direction,
    palette: {
      primary: {
        main: colors[themeMode].background,
      },
      secondary: {
        main: colors[themeMode].typo,
      },
    },
    typography: {
      fontWeightLight: 300,
      fontWeightRegular: 400,
      fontWeightMedium: 500,
      fontWeightBold: 700,
    },
    overrides: {
      MuiCssBaseline: {
        '@global': {
          body: {
            flip: false,
            direction: direction,
            backgroundColor: colors[themeMode].background,
          },
        },
      },
    },
  });

export default createCustomTheme;
