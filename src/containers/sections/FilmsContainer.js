// @flow
import React, { Component, Fragment } from 'react';
import Loads from 'react-loads';
import axios from 'axios';

import GeneralSectionContainer from '../GeneralSectionContainer';
import { ITEM_TYPES } from '../../_types/item_types';

type Props = {};

export default class FilmsContianer extends Component<Props> {
  fetchFilms = async () => {
    const response = await axios.get('https://swapi.co/api/films/');
    return response.data;
  };

  updateFilms = async (nextPageUrl: string) => {
    const response = await axios.get(nextPageUrl);
    return response.data;
  };

  render = () => {
    const contextKey = 'films';
    return (
      <Fragment>
        <Loads contextKey={contextKey} load={this.fetchFilms} loadOnMount update={this.updateFilms}>
          {({ update, isLoading, isSuccess, isError, error, response }) => (
            <GeneralSectionContainer
              contextKey={contextKey}
              error={error}
              isError={isError}
              isLoading={isLoading}
              isSuccess={isSuccess}
              itemType={ITEM_TYPES.FILMS}
              response={response}
              update={update}
              heading="Films"
            />
          )}
        </Loads>
      </Fragment>
    );
  };
}
