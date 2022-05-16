import { breakpoints, languages } from './Config';

export const setBreakPoint = () => {
  let BreakPoint = '';
  let size = window.innerWidth;
  if (size >= breakpoints.values.xl) BreakPoint = 'xl';
  else if (size >= breakpoints.values.lg && size < breakpoints.values.xl)
    BreakPoint = 'lg';
  else if (size >= breakpoints.values.md && size < breakpoints.values.lg)
    BreakPoint = 'md';
  else if (size >= breakpoints.values.sm && size < breakpoints.values.md)
    BreakPoint = 'sm';
  else if (size >= breakpoints.values.xs && size < breakpoints.values.sm)
    BreakPoint = 'xs';
  return BreakPoint;
};

export const initAppState = () => {
  const app = localStorage.getItem('app');
  let newApp;
  if (!app) {
    newApp = {
      direction: 'rtl',
      theme: 'Dark',
    };
    localStorage.setItem('app', JSON.stringify(newApp));
  } else {
    newApp = JSON.parse(app);
  }
  return newApp;
};
