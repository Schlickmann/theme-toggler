import styled from 'styled-components';

export const BackgroundImage = styled.g`
  width: 100%;
  height: 100%;
  path {
    fill: ${props => props.theme === 'dark' ? '#17116E' : '#eead2d' };
    width: 100%;
    height: 100%;
  }
`;
