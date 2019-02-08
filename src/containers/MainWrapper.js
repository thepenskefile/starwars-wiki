// @flow
import React, { Fragment } from 'react';
import { Box, Heading } from 'fannypack';
import styled, { keyframes } from 'fannypack/styled';
import BackgroundImage from '../ui/images/stars.png';
import TwinklingImage from '../ui/images/twinkling.png';

const moveTwinkBack = keyframes`
  from {background-position:0 0;}
  to {background-position:-10000px 5000px;}
`;

const Main = styled(Box)`
  text-align: center;
  margin: auto;
  max-width: 700px;
  & a {
    text-decoration: none;
    color: white;
  }
  padding: 20px;
  color: white;
  font-family: 'Advent Pro', sans-serif;
`;

const Background = styled(Box)`
  background-color: black;
`;

const Background2 = styled(Box)`
  background-color: black;
  position: absolute;
  min-height: 100%;
  width: 100%;
  z-index: -10;
`;

const Twinkling = styled(Box)`
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  min-height: 100%;
  z-index: 1;
  -moz-animation: ${moveTwinkBack} 200s linear infinite;
  -ms-animation: ${moveTwinkBack} 200s linear infinite;
  -o-animation: ${moveTwinkBack} 200s linear infinite;
  -webkit-animation: ${moveTwinkBack} 200s linear infinite;
  animation: ${moveTwinkBack} 200s linear infinite;
`;

type Props = {
  children: Node
};

const MainWrapper = ({ children }: Props) => (
  <Fragment>
    <Background2 style={{ backgroundImage: `url(${BackgroundImage})` }} />
    <Background style={{ backgroundImage: `url(${BackgroundImage})` }}>
      <Twinkling style={{ backgroundImage: `url(${TwinklingImage})` }}>
        <Main>
          <Heading fontFamily="jedi-outline" color="#ffd700">
            StarWars Wiki
          </Heading>
          {children}
        </Main>
      </Twinkling>
    </Background>
  </Fragment>
);

export default MainWrapper;
