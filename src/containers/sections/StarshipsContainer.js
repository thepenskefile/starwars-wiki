import React, { Component, Fragment } from 'react';
import Loads from 'react-loads';
import axios from 'axios';

import GeneralSectionContainer from '../GeneralSectionContainer';
import { ITEM_TYPES } from '../../_types/item_types';

export default class starshipsContainer extends Component {
  fetchStarships = async () => {
    const response = await axios.get('https://swapi.co/api/starships/');
    return response.data;
  };

  updateStarships = async nextPageUrl => {
    const response = await axios.get(nextPageUrl);
    return response.data;
  };

  render = () => {
    const contextKey = 'starships';
    return (
      <Fragment>
        <Loads contextKey={contextKey} loadOnMount load={this.fetchStarships} update={this.updateStarships}>
          {({ update, isLoading, isSuccess, isError, error, response }) => (
            <GeneralSectionContainer
              contextKey={contextKey}
              itemType={ITEM_TYPES.STARSHIPS}
              response={response}
              update={update}
              isLoading={isLoading}
              isSuccess={isSuccess}
              isError={isError}
              error={error}
              heading="Starships"
            />
          )}
        </Loads>
      </Fragment>
    );
  };
}
