import React from 'react';
import { Box } from 'fannypack';
import styled from 'fannypack/styled';

const StyledCard = styled(Box)`
	border-style: solid;
	border-width: 0.5px;
	border-color: rgb(221,221,221);
	border-radius: 5px;
	line-height: 70px;
    margin-bottom: 20px;
    color: black;
    background-color: white;
    opacity: 0.5;
`;

const Card = ({children}) =>  (
    <StyledCard>
        {children}
    </StyledCard>    
)

export default Card;