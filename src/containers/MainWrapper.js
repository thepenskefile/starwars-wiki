import React, { Fragment } from 'react';
import { Box, Heading } from 'fannypack';
import styled from 'fannypack/styled';
import BackgroundImage from '../ui/images/stars.png';

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

type Props = {
  children: Node
};

const MainWrapper = ({ children }: Props) => (
  <Fragment>
    <Background2 style={{ backgroundImage: `url(${BackgroundImage})` }} />
    <Background style={{ backgroundImage: `url(${BackgroundImage})` }}>
      <Box className="twinkling">
        <Main>
          <Heading fontFamily="jedi-outline" color="#ffd700">
            StarWars Wiki
          </Heading>
          {children}
        </Main>
      </Box>
    </Background>
  </Fragment>
);

export default MainWrapper;
