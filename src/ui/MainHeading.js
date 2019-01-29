import React from 'react';
import { Heading } from 'fannypack';
import styled from 'fannypack/styled';

const StyledHeading = styled(Heading)`
	padding: 20px; 
`;

const MainHeading = ({children}) =>  (
    <StyledHeading use='h3' isSubHeading>
        {children}
    </StyledHeading>    
)

export default MainHeading;