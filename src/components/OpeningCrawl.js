import React from 'react';
import { Box } from 'fannypack';

type Props = {
  title: string,
  text: string
};

const OpeningCrawl = ({ title, text }: Props) => (
  <Box className="fade">
    <section className="star-wars">
      <Box className="crawl">
        <Box className="title">{title}</Box>
        <p>{text}</p>
      </Box>
    </section>
  </Box>
);

export default OpeningCrawl;
