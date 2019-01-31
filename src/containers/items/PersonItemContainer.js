import React, { Component, Fragment } from 'react';
import Loads from 'react-loads'
import axios from 'axios';
import { Spinner, Box, Tooltip, Grid } from 'fannypack'
import BackButton from '../../ui/BackButton';
import GridItem from '../../ui/GridItem';

class PersonItemContainer extends Component {
    fetchPerson = async () => {
        const { id } = this.props;
        const response = await axios.get(
            `https://cors-anywhere.herokuapp.com/https://swapi.co/api/people/${id}`
        )
        return response.data;
    }
    render = () => {
        const { id } = this.props;
        return (
            <Fragment>
                <BackButton to="/people"/>
                <Loads contextKey={`person.${id}`} loadOnMount load={this.fetchPerson}>
                    {({ isLoading, isSuccess, isError, error, response }) => (
                        <Fragment>
                            {isLoading && <Box><Spinner marginTop='10px' size='large' color='#ffd700'/></Box>}
                            {isSuccess && (
                                <Grid templateColumns="repeat(2, 1fr)" fontSize='25px' autoRows="auto" margin='auto'>
                                    <GridItem columnStart='1' columnEnd='3'><strong>{response.name}</strong></GridItem>
                                    <GridItem isTinted isLeft>Height</GridItem>
                                    <GridItem isTinted isRight>{response.height}</GridItem>
                                    <GridItem>Mass</GridItem>
                                    <GridItem>{response.mass}</GridItem>
                                    <GridItem isTinted isLeft>Hair colour</GridItem>
                                    <GridItem isTinted isRight>{response.hair_color}</GridItem>
                                    <GridItem>Eye color</GridItem>
                                    <GridItem>{response.eye_color}</GridItem>
                                    <GridItem isTinted isLeft>
                                        Birth Year 
                                    </GridItem>
                                    <GridItem isTinted isRight>{response.birth_year}
                                        <Tooltip expand fade slide backgroundColor='white' color='black' placement="right" fontSize='20px' margin='5px' opacity='1'>
                                            The birth year of the person,<br />
                                            using the in-universe standard of BBY or ABY - <br />
                                            Before the Battle of Yavin or After the Battle of Yavin.<br />
                                            The Battle of Yavin is a battle that occurs at the end of<br />
                                            Star Wars episode IV: A New Hope.
                                        </Tooltip>
                                    </GridItem>
                                </Grid>                               
                            )}
                            {isError && <Box>An error occurred! {error.message}</Box>}
                        </Fragment>
                    )}                    
                </Loads>
            </Fragment>   
        );
    }
}

export default PersonItemContainer;
