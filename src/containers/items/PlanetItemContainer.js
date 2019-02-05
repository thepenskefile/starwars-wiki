//  @flow
import React, { Component, Fragment } from 'react';
import Loads from 'react-loads';
import axios from 'axios';
import { Spinner, Box } from 'fannypack';
import BackButton from '../../ui/BackButton';
import ItemDetails from '../ItemDetails';

type Props = {
  id: string
};

class PlanetItemContainer extends Component<Props> {
  fetchPlanet = async () => {
    const { id } = this.props;
    const response = await axios.get(`https://cors-anywhere.herokuapp.com/https://swapi.co/api/planets/${id}`);
    return response.data;
  };
  render = () => {
    const { id } = this.props;
    return (
      <Fragment>
        <BackButton to="/planets" />
        <Loads contextKey={`planet.${id}`} loadOnMount load={this.fetchPlanet}>
          {({ isLoading, isSuccess, isError, error, response }) => (
            <Fragment>
              {isLoading && (
                <Box>
                  <Spinner size="large" marginTop="10px" color="#ffd700" />
                </Box>
              )}
              {isSuccess && (
                <ItemDetails
                  title={response.name}
                  data={{
                    Climate: response.climate ? response.climate : 'N/A',
                    Gravity: response.gravity ? response.gravity : 'N/A',
                    Terrain: response.terrain ? response.terrain : 'N/A'
                  }}
                />
              )}
              {isError && <Box>An error occurred! {error.message}</Box>}
            </Fragment>
          )}
        </Loads>
      </Fragment>
    );
  };
}

export default PlanetItemContainer;
