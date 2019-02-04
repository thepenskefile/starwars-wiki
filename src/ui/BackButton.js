import React from 'react'
import { Button } from 'fannypack'
import styled from 'fannypack/styled'
import { Link } from '@reach/router'

const StyledButton = styled(Button)`
	border-style: solid;
	border-width: 0.5px;
	border-color: rgb(221,221,221);
	border-radius: 5px;
    color: black;
    margin-bottom: 10px;
    background-color: #ffd700;
    font-family: death-star;
`

const BackButton = ({to}) =>  (
  <Link to={to}><StyledButton>Back</StyledButton></Link>   
)

export default BackButton