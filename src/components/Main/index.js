import React, { useContext } from 'react';
import ThemeToggler from '../ThemeToggler';
import Scene from '../Scene';
import { store } from '../store';

import { Container, Header, Content } from './styles'

function Main() {
  const globalState = useContext(store);
  const { state } = globalState;


  return (
    <Container theme={state.theme}>
      <Header theme={state.theme}>
        <ThemeToggler />
        <span>{state.theme}</span>
      </Header>
      <Content>
        <Scene />
      </Content>
    </Container>
  );
}

export default Main;
