import React from 'react';
import Main from './components/Main';
import GlobalStyle from './global/styles';
import { StateProvider } from './components/store';

function App() {
  return (
    <StateProvider>
      <GlobalStyle />
      <Main />
    </StateProvider>
  );
}

export default App;
