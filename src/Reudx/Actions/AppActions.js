export const ChangeTheme = (type) => {
  return {
    type: 'app/changeTheme',
    payload: type,
  };
};

export const ChangeDirection = (dir) => {
  return {
    type: 'app/changeDirection',
    payload: dir,
  };
};

export const ChangeBreakPoint = (breakpoint) => {
  return {
    type: 'app/changeBreakPoint',
    payload: breakpoint,
  };
};
