// @flow
import React, { Component, Fragment } from 'react';
import Loads from 'react-loads';
import axios from 'axios';

import GeneralSectionContainer from '../GeneralSectionContainer';
import { ITEM_TYPES } from '../../_types/item_types';

type Props = {};

export default class PeopleContainer extends Component<Props> {
  fetchPeople = async () => {
    const response = await axios.get('https://swapi.co/api/people/');
    return response.data;
  };

  updatePeople = async (nextPageUrl: string )=> {
    const response = await axios.get(nextPageUrl);
    return response.data;
  };

  render = () => {
    const contextKey = 'people';
    return (
      <Fragment>
        <Loads contextKey={contextKey} loadOnMount load={this.fetchPeople} update={this.updatePeople}>
          {({ update, isLoading, isSuccess, isError, error, response }) => (
            <GeneralSectionContainer
              contextKey={contextKey}
              itemType={ITEM_TYPES.PEOPLE}
              response={response}
              update={update}
              isLoading={isLoading}
              isSuccess={isSuccess}
              isError={isError}
              error={error}
              heading={'People'}
            />
          )}
        </Loads>
      </Fragment>
    );
  };
}
