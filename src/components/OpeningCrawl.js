import React from 'react';
import { Box } from 'fannypack';
import styled, { keyframes } from 'fannypack/styled';

const rotate = keyframes`
  0% {
    top: 0;
    transform: rotateX(20deg)  translateZ(0);
  }
  100% { 
    top: -6000px;
    transform: rotateX(25deg) translateZ(-2500px);
  }
`;

const Crawl = styled(Box)`
  animation: ${rotate} 60s linear;
  position: relative;
  top: 9999px;
  transform-origin: 50% 100%;
  width: 100%;
`;

const Fade = styled(Box)`
  position: relative;
  width: 100%;
  min-height: 60vh;
  z-index: 1;
  overflow: hidden;
`;

const StarWars = styled.section`
  display: flex;
  justify-content: center;
  position: relative;
  height: 800px;
  color: #feda4a;
  font-family: 'Pathway Gothic One', sans-serif;
  font-size: 500%;
  font-weight: 600;
  letter-spacing: 6px;
  line-height: 150%;
  perspective: 400px;
  text-align: justify;
  width: 100%;
`;

type Props = {
  title: string,
  text: string
};

const OpeningCrawl = ({ title, text }: Props) => (
  <Fade>
    <StarWars>
      <Crawl>
        <Box margin="0 0 100px" textTransform="uppercase" textAlign="center" fontSize="90%">
          {title}
        </Box>
        <p>{text}</p>
      </Crawl>
    </StarWars>
  </Fade>
);

export default OpeningCrawl;
