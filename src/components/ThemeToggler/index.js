import React, { useContext } from 'react';
import { store } from '../store';

import { Toggler, Switch, Span } from './styles';

export default function ThemeToggler() {
  const globalState = useContext(store);
  const { state, dispatch } = globalState;

  function handleThemeChange(event) {
    const theme = event.target.checked ? 'dark' : 'light';
    dispatch({ type: 'ON_THEME_CHANGE', payload: { theme }});
  }

  return (
    <Toggler>
      <Switch onClick={handleThemeChange} />
      <Span theme={state.theme}></Span>
    </Toggler>
  );
}
