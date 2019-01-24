import React, { Component, Fragment } from 'react';
import Loads from 'react-loads'
import axios from 'axios';
import { Link } from '@reach/router';

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
                <Link to="/planets">Back</Link>
                <Loads contextKey={`planet.${id}`} loadOnMount load={this.fetchPlanet}>
                    {({ isLoading, isSuccess, isError, error, response }) => (
                        <Fragment>
                            {isLoading && <div>Loading...</div>}
                            {isSuccess && (
                                <Fragment>
                                    <div>{response.name}</div>
                                    <div>Climate: {response.climate}</div>
                                    <div>Gravity: {response.gravity}</div>
                                    <div>Terrain: {response.terrain}</div>
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

export default PlanetItemContainer;
