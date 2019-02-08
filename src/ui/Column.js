// @flow
import React from 'react';
import type { Node } from 'react';
import { Column as _Column } from 'fannypack';
import styled from 'fannypack/styled';

const StyledColumn = styled(_Column)`
  @media (max-width: 768px) {
    border-radius: 0px !important;
  }
`;
type Props = {
  children: Node,
  isTinted: boolean,
  isRight: boolean,
  isLeft: boolean
};
const Column = ({ children, isTinted, isRight, isLeft, ...props }: Props) => {
  return (
    <StyledColumn
      color={isTinted ? 'black' : 'white'}
      backgroundColor={isTinted ? 'white' : ''}
      opacity={isTinted ? '0.5' : ''}
      borderTopRightRadius={isRight ? '5px' : ''}
      borderBottomRightRadius={isRight ? '5px' : ''}
      borderTopLeftRadius={isLeft ? '5px' : ''}
      borderBottomLeftRadius={isLeft ? '5px' : ''}
      {...props}
    >
      {children}
    </StyledColumn>
  );
};

export default Column;
