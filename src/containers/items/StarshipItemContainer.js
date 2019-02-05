// @flow
import React, { Component, Fragment } from 'react';
import Loads from 'react-loads';
import axios from 'axios';
import BackButton from '../../ui/BackButton';
import { Spinner, Box } from 'fannypack';
import ItemDetails from '../ItemDetails';

type Props = {
  id: string
};

class StarshipItemContainer extends Component<Props> {
  fetchStarship = async () => {
    const { id } = this.props;
    const response = await axios.get(`https://cors-anywhere.herokuapp.com/https://swapi.co/api/starships/${id}`);
    return response.data;
  };
  render = () => {
    const { id } = this.props;
    return (
      <Fragment>
        <BackButton to="/starships" />
        <Loads contextKey={`starship.${id}`} loadOnMount load={this.fetchStarship}>
          {({ isLoading, isSuccess, isError, error, response }) => (
            <Fragment>
              {isLoading && (
                <Box>
                  <Spinner marginTop="10px" size="large" color="#ffd700" />
                </Box>
              )}
              {isSuccess && (
                <ItemDetails
                  title={response.name}
                  data={{
                    Model: response.model ? response.model : 'N/A',
                    Manufacturer: response.manufacturer ? response.manufacturer : 'N/A',
                    'Cost (in credits)': response.cost_in_credits ? response.cost_in_credits : 'N/A',
                    'Max atmospheric speed': response.max_atmospheric_speed ? response.max_atmospheric_speed : 'N/A',
                    Crew: response.crew ? response.crew : 'N/A',
                    Passengers: response.passengers ? response.passengers : 'N/A',
                    'Cargo capacity': response.cargo_capacity ? response.cargo_capacity : 'N/A',
                    'Hyperdrive rating': response.hyperdrive_rating ? response.hyperdrive_rating : 'N/A',
                    'Starship class': response.starship_class ? response.starship_class : 'N/A'
                  }}
                />
              )}
              {isError && <div>An error occurred! {error.message}</div>}
            </Fragment>
          )}
        </Loads>
      </Fragment>
    );
  };
}

export default StarshipItemContainer;
