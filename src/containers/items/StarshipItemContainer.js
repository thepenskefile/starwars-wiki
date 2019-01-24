import React, { Component, Fragment } from 'react';
import Loads from 'react-loads'
import axios from 'axios';
import { Link } from '@reach/router';

class StarshipItemContainer extends Component {
    fetchStarship = async () => {
        const { id } = this.props;
        const response = await axios.get(
            `https://cors-anywhere.herokuapp.com/https://swapi.co/api/starships/${id}`
        )
        return response.data;
    }
    render = () => {
        const { id } = this.props;
        return (
            <Fragment>
                <Link to="/starships">Back</Link>
                <Loads contextKey={`starship.${id}`} loadOnMount load={this.fetchStarship}>
                    {({ isLoading, isSuccess, isError, error, response }) => (
                        <Fragment>
                            {isLoading && <div>Loading...</div>}
                            {isSuccess && (
                                <Fragment>
                                    <div>{response.name}</div>
                                    <div>Model: {response.model}</div>
                                    <div>Manufacturer: {response.manufacturer}</div>
                                    <div>Cost (in credits): {response.cost_in_credits}</div>
                                    <div>Max atmospheric speed: {response.max_atmospheric_speed}</div>
                                    <div>Crew: {response.crew}</div>
                                    <div>Passengers: {response.passengers}</div>
                                    <div>cargo capacity: {response.cargo_capacity}</div>
                                    <div>Hyperdrive rating: {response.hyperdrive_rating}</div>
                                    <div>Starship class: {response.starship_class}</div>
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

export default StarshipItemContainer;
