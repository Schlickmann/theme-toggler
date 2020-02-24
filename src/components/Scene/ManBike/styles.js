import styled, { keyframes } from 'styled-components';

const moving = keyframes`
  from {
    transform: rotateX(0deg);
  }
  to {
    transform: rotateX(20deg);
  }
`; 
export const Man = styled.g`
  animation: ${moving} 1s ease-in-out infinite alternate;
  transform-origin: bottom;
`;
