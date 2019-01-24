import React, { Component, Fragment } from 'react';
import Loads from 'react-loads'
import axios from 'axios';
import { Link } from '@reach/router';

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
                <Link to="/films">Back</Link>
                <Loads contextKey={`films.${id}`} loadOnMount load={this.fetchFilm}>
                    {({ isLoading, isSuccess, isError, error, response }) => (
                        <Fragment>
                            {isLoading && <div>Loading...</div>}
                            {isSuccess && (
                                <Fragment>
                                    <div>{response.title}</div>
                                    <div>Director: {response.director}</div>
                                    <div>Producer: {response.producer}</div>
                                    <div>Release Date: {response.release_date}</div>
                                </Fragment>                                 
                            )}
                            {isError && <div>An error occurred! {error.message}</div>}
                        </Fragment>
                    )}                    
                </Loads>
            </Fragment>   
        );
    }
}

export default FilmItemContainer;
