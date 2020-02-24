import styled, { keyframes } from 'styled-components';

const moving = keyframes`
  from {
    transform: translateY(0%);
  }
  to {
    transform: translateY(30%);
  }
`; 

export const ManHat = styled.g`
  animation: ${moving} 1s ease-in-out infinite alternate;
  transform-origin: center;
  transform-box: fill-box;
`;
