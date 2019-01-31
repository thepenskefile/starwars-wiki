import React, { Component, Fragment } from 'react';
import Loads from 'react-loads'
import axios from 'axios';
import { Spinner, Box, Grid } from 'fannypack';
import BackButton from '../../ui/BackButton';
import GridItem from '../../ui/GridItem';

class PlanetItemContainer extends Component {
    fetchPlanet = async () => {
        const { id } = this.props;
        const response = await axios.get(
            `https://cors-anywhere.herokuapp.com/https://swapi.co/api/planets/${id}`
        )
        return response.data;
    }
    render = () => {
        const { id } = this.props;
        return (
            <Fragment>
                <BackButton to="/planets"/>
                <Loads contextKey={`planet.${id}`} loadOnMount load={this.fetchPlanet}>
                    {({ isLoading, isSuccess, isError, error, response }) => (
                        <Fragment>
                            {isLoading && <Box><Spinner size='large' color='#ffd700'/></Box>}
                            {isSuccess && (
                                <Grid templateColumns="repeat(2, 1fr)" fontSize='25px' autoRows="auto" margin='auto'>
                                    <GridItem columnStart='1' columnEnd='3'><strong>{response.name}</strong></GridItem>
                                    <GridItem isTinted isLeft>Climate</GridItem>
                                    <GridItem isTinted isRight>{response.climate}</GridItem>
                                    <GridItem>Gravity</GridItem>
                                    <GridItem>{response.gravity}</GridItem>
                                    <GridItem isTinted isLeft>Terrain</GridItem>
                                    <GridItem isTinted isRight>{response.terrain}</GridItem>
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

export default PlanetItemContainer;
