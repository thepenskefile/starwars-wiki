// @flow
import React, { Component, Fragment } from 'react';
import Loads from 'react-loads';
import axios from 'axios';

import GeneralSectionContainer from '../GeneralSectionContainer';
import { ITEM_TYPES } from '../../_types/item_types';

type Props = {};

export default class PlanetsContainer extends Component<Props> {
  fetchPlanets = async () => {
    const response = await axios.get('https://swapi.co/api/planets/');
    return response.data;
  };

  updatePlanets = async (nextPageUrl: string) => {
    const response = await axios.get(nextPageUrl);
    return response.data;
  };

  render = () => {
    const contextKey = 'planets';
    return (
      <Fragment>
        <Loads contextKey={contextKey} loadOnMount load={this.fetchPlanets} update={this.updatePlanets}>
          {({ update, isLoading, isSuccess, isError, error, response }) => (
            <GeneralSectionContainer
              contextKey={contextKey}
              itemType={ITEM_TYPES.PLANETS}
              response={response}
              update={update}
              isLoading={isLoading}
              isSuccess={isSuccess}
              isError={isError}
              error={error}
              heading={'Planets'}
            />
          )}
        </Loads>
      </Fragment>
    );
  };
}
