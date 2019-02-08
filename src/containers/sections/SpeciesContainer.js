// @ flow
import React, { Component, Fragment } from 'react';
import Loads from 'react-loads';
import axios from 'axios';

import GeneralSectionContainer from '../GeneralSectionContainer';
import { ITEM_TYPES } from '../../_types/item_types';

type Props = {};

export default class SpeciesContainer extends Component<Props> {
  fetchSpecies = async () => {
    const response = await axios.get('https://swapi.co/api/species/');
    return response.data;
  };

  updateSpecies = async (nextPageUrl: string) => {
    const response = await axios.get(nextPageUrl);
    return response.data;
  };

  render = () => {
    const contextKey = 'species';
    return (
      <Fragment>
        <Loads contextKey={contextKey} loadOnMount load={this.fetchSpecies} update={this.updateSpecies}>
          {({ update, isLoading, isSuccess, isError, error, response }) => (
            <GeneralSectionContainer
              contextKey={contextKey}
              itemType={ITEM_TYPES.SPECIES}
              response={response}
              update={update}
              isLoading={isLoading}
              isSuccess={isSuccess}
              isError={isError}
              error={error}
              heading={'Species'}
            />
          )}
        </Loads>
      </Fragment>
    );
  };
}
