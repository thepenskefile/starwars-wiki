import React, { Component, Fragment } from 'react';
import Loads from 'react-loads'
import axios from 'axios';
import { Link } from '@reach/router';

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
                <Link to="/species">Back</Link>
                <Loads contextKey={`species.${id}`} loadOnMount load={this.fetchSpecies}>
                    {({ isLoading, isSuccess, isError, error, response }) => (
                        <Fragment>
                            {isLoading && <div>Loading...</div>}
                            {isSuccess && (
                                <Fragment>
                                    <div>{response.name}</div>
                                    <div>Classification: {response.classification}</div>
                                    <div>Designation: {response.designation}</div>
                                    <div>Average Height: {response.average_height}</div>
                                    <div>Skin colours: {response.skin_colors}</div>
                                    <div>Hair colours: {response.hair_colors}</div>
                                    <div>Eye colours: {response.eye_colors}</div>
                                    <div>Average Lifespan: {response.average_lifespan}</div>
                                    <div>Language: {response.language}</div>

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

export default SpeciesItemContainer;
