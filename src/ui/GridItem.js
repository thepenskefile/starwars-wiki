import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from 'fannypack'

const GridItem = ({ children, isTinted, isRight, isLeft, ...props }) =>  {
    return( 
        <Grid.Item 
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
        </Grid.Item>
    )
};

export default GridItem;