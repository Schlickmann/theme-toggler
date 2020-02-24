import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotateZ(0deg);
  }
  to {
    transform: rotateZ(360deg);
  }
`; 

export const Wheel = styled.g`
  animation: ${rotate} 2s linear infinite;
  transform-origin: center;
  transform-box: fill-box;
`;
