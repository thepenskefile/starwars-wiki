// @flow
import React from 'react';
import type { Node } from 'react';
import { Heading } from 'fannypack';
import styled from 'fannypack/styled';
import '../App.css';

const StyledHeading = styled(Heading)`
  padding: 20px;
  font-family: stjedise;
`;

type Props = {
  children: Node
};

const MainHeading = ({ children }: Props) => (
  <StyledHeading use="h3" isSubHeading>
    {children}
  </StyledHeading>
);

export default MainHeading;
