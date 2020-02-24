import styled from 'styled-components';

export const BackgroundImage = styled.g`
  path {
    fill: ${props => props.theme === 'dark' ? '#17116E' : '#eead2d' };
  }
`;
