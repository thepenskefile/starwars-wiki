import React, { Fragment } from 'react';
import { Box, Heading, Image } from 'fannypack';
import styled from 'fannypack/styled';
import BackgroundImage from '../ui/images/stars.png';
import TwinkleImage from '../ui/images/twinkling.png';
import '../App.css';
const Main = styled(Box)`
	text-align: center;
    margin: auto;
	width: 700px;
	& a {
		text-decoration: none;
		color: white;
    }
    padding: 20px;
    color: white;
`;

const Background = styled(Box)`
    background-color: black;
`;

const Test = styled(Box)`
    background-color: black;
    position: absolute;
    min-height: 100%;
    width: 100%;
    z-index: -10;
`;

const MainWrapper = ({children}) =>  (
    <Fragment>
        <Test style={{ backgroundImage: `url(${BackgroundImage})` }}/>
        <Background style={{ backgroundImage: `url(${BackgroundImage})` }}>
            <Box className='twinkling'>
                <Main>
                    <Heading>
                        StarWars Wiki
                    </Heading>
                    {children}
                </Main> 
            </Box>            
        </Background>  
    </Fragment>      
)

export default MainWrapper;