import React, { Component, Fragment } from 'react';
import Loads from 'react-loads'
import axios from 'axios';
import BackButton from '../../ui/BackButton';
import { Spinner, Box, Grid } from 'fannypack';
import GridItem from '../../ui/GridItem';

class SpeciesItemContainer extends Component {
    fetchSpecies = async () => {
        const { id } = this.props;
        const response = await axios.get(
            `https://cors-anywhere.herokuapp.com/https://swapi.co/api/species/${id}`
        )
        return response.data;
    }
    render = () => {
        const { id } = this.props;
        return (
            <Fragment>
                <BackButton to="/species"/>
                <Loads contextKey={`species.${id}`} loadOnMount load={this.fetchSpecies}>
                    {({ isLoading, isSuccess, isError, error, response }) => (
                        <Fragment>
                            {isLoading && <Box><Spinner size='large' color='#ffd700'/></Box>}
                            {isSuccess && (
                                <Grid templateColumns="repeat(2, 1fr)" fontSize='25px' autoRows="auto" margin='auto'>
                                    <GridItem columnStart='1' columnEnd='3'><strong>{response.name}</strong></GridItem>
                                    <GridItem isTinted isLeft>Classification: </GridItem>
                                    <GridItem isTinted isRight>{response.classification}</GridItem>
                                    <GridItem>Designation</GridItem>
                                    <GridItem>{response.designation}</GridItem>
                                    <GridItem isTinted isLeft>Average Height</GridItem>
                                    <GridItem isTinted isRight>{response.average_height}</GridItem>
                                    <GridItem>Skin colours</GridItem>
                                    <GridItem>{response.skin_colors}</GridItem>
                                    <GridItem isTinted isLeft>Hair colours</GridItem>
                                    <GridItem isTinted isRight>{response.hair_colors}</GridItem>
                                    <GridItem>Eye colours</GridItem>
                                    <GridItem>{response.eye_colors}</GridItem>
                                    <GridItem isTinted isLeft>Average Lifespan</GridItem>
                                    <GridItem isTinted isRight>{response.average_lifespan}</GridItem>
                                    <GridItem>Language</GridItem>
                                    <GridItem>{response.language}</GridItem>
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

export default SpeciesItemContainer;
