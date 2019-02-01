import React, { Component, Fragment } from 'react';
import Loads from 'react-loads'
import axios from 'axios';
import { Spinner, Box} from 'fannypack';
import BackButton from '../../ui/BackButton';
import ItemGrid from '../ItemGrid';

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
                                <ItemGrid 
                                    title = {response.title}
                                    data = {{
                                        'Director': response.director ? response.director : 'N/A',
                                        'Producer': response.producer ? response.producer : 'N/A',
                                        'Release date': response.release_date ? response.release_date : 'N/A'
                                    }}                                
                                />                           
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
