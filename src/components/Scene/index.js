import React from 'react';
import Background from './Background';
import ManBike from './ManBike';
import BackWheel from './BackWheel';
import FrontWheel from './FrontWheel';
import Hat from './Hat';

import { SVG, Container } from './styles';

export default function Scene() {
  return (
    <Container>
      <SVG viewBox="0 0 1058 785" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="bike 1">
          <g clipPath="url(#clip0)">
            <Background />
            <ManBike />
            <BackWheel />
            <FrontWheel />
            <Hat />
          </g>
        </g>
        <defs>
          <clipPath id="clip0">
            <rect width="1057.7" height="784.98" fill="white"/>
          </clipPath>
        </defs>
      </SVG>
    </Container>
  );
}
