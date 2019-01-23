import React, { Component, Fragment } from 'react';
import { createLoader } from 'react-loads'
import axios from 'axios';

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
        const FetchPlanet = createLoader({
            contextKey: `planet.${id}`,
            load: this.fetchPlanet,
            loadOnMount: true
        })
        return (
            <Fragment>
                <FetchPlanet>
                    <FetchPlanet.Loading>
                        <div>Loading...</div>
                    </FetchPlanet.Loading>
                    <FetchPlanet.Success>
                        {({ response: planet }) => (
                            <Fragment>
                                <div>{planet.name}</div>
                                <div>Climate: {planet.climate}</div>
                                <div>Gravity: {planet.gravity}</div>
                                <div>Terrain: {planet.terrain}</div>
                            </Fragment>
                        )}
                    </FetchPlanet.Success>
                </FetchPlanet>
            </Fragment>   
        );
    }
}

export default PlanetItemContainer;
