import { StylesProvider, jssPreset } from '@material-ui/core/styles';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ChangeBreakPoint } from './Reudx/Actions/AppActions';
import { setBreakPoint } from './Utils/Functions';
import CssBaseline from '@material-ui/core/CssBaseline';
import createCustomTheme from './Utils/Theme';
import { create } from 'jss';
import rtl from 'jss-rtl';
import Routes from './routes';

function App() {
  const dispatch = useDispatch();
  const appState = useSelector((state) => state.App);
  const direction =
    appState.Direction === undefined ? 'rtl' : appState.Direction;
  const themeMode =
    appState.ThemeMode === undefined ? 'Dark' : appState.ThemeMode;
  const theme = useMemo(
    () => createCustomTheme(direction, themeMode),
    [direction, themeMode]
  );

  const jss = create({
    plugins: [...jssPreset().plugins, rtl()],
  });

  useEffect(() => {
    const setBreaks = () => {
      let breakpoint = setBreakPoint();
      dispatch(ChangeBreakPoint(breakpoint));
    };
    setBreaks();
    window.addEventListener('resize', setBreaks);
    return () => {
      window.removeEventListener('resize', setBreaks);
    };
  }, []);
  return (
    <StylesProvider jss={jss}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Routes />
      </MuiThemeProvider>
    </StylesProvider>
  );
}

export default App;
