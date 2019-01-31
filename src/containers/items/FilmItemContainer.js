import React, { Component, Fragment } from 'react';
import Loads from 'react-loads'
import axios from 'axios';
import { Spinner, Box, Grid } from 'fannypack';
import BackButton from '../../ui/BackButton';
import GridItem from '../../ui/GridItem';

class FilmItemContainer extends Component {
    fetchFilm = async () => {
        const { id } = this.props;
        const response = await axios.get(
            `https://cors-anywhere.herokuapp.com/https://swapi.co/api/films/${id}`
        )
        return response.data;
    }
    render = () => {
        const { id } = this.props;
        return (
            <Fragment>
                <BackButton to="/films"/>
                <Loads contextKey={`films.${id}`} loadOnMount load={this.fetchFilm}>
                    {({ isLoading, isSuccess, isError, error, response }) => (
                        <Fragment>
                            {isLoading && <Box><Spinner size='large' color='#ffd700'/></Box>}
                            {isSuccess && (
                                <Grid templateColumns="repeat(2, 1fr)" fontSize='25px' autoRows="auto" margin='auto'>
                                    <GridItem columnStart='1' columnEnd='3'><strong>{response.title}</strong></GridItem>
                                    <GridItem isTinted isLeft>Director</GridItem>
                                    <GridItem isTinted isRight>{response.director}</GridItem>
                                    <GridItem>Producer</GridItem>
                                    <GridItem>{response.producer}</GridItem>
                                    <GridItem isTinted isLeft>Release Date</GridItem>
                                    <GridItem isTinted isRight>{response.release_date}</GridItem>
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

export default FilmItemContainer;
