import React from 'react';
import PropTypes from 'prop-types';
import { Column as _Column } from 'fannypack';
import styled from 'fannypack/styled';

const StyledColumn = styled(_Column)`
  @media (max-width: 768px) {
    border-radius: 0px !important;  
  }
`;


const Column = ({ children, isTinted, isRight, isLeft, ...props }) =>  {
    return( 
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
    )
};

export default Column;