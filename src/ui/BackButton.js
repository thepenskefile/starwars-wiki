import React from 'react';
import { Button } from 'fannypack';
import styled from 'fannypack/styled';
import { Link } from '@reach/router';

const StyledButton = styled(Button)`
	border-style: solid;
	border-width: 0.5px;
	border-color: rgb(221,221,221);
	border-radius: 5px;
    margin: 20px 20px;
    color: black;
    background-color: #ffd700;
    font-family: star_jedi;
`;

const BackButton = ({to}) =>  (
    <Link to={to}><StyledButton>Back</StyledButton></Link>   
)

export default BackButton;