import { initAppState } from '../../Utils/Functions';

const app = initAppState();

export default function AppReducer(
  state = {
    ThemeMode: app.theme,
    Direction: app.direction,
    BreakPoint: '',
  },
  action
) {
  if (action.type === 'app/changeDirection') {
    let appState = JSON.parse(localStorage.getItem('app'));
    appState.direction = action.payload;
    localStorage.setItem('app', JSON.stringify(appState));
    return {
      ...state,
      Direction: action.payload,
    };
  } else if (action.type === 'app/changeTheme') {
    let appState = JSON.parse(localStorage.getItem('app'));
    appState.theme = action.payload;
    localStorage.setItem('app', JSON.stringify(appState));
    return {
      ...state,
      ThemeMode: action.payload,
    };
  } else if (action.type === 'app/changeBreakPoint') {
    return {
      ...state,
      BreakPoint: action.payload,
    };
  }
  return state;
}
