import React, { Component, Fragment } from 'react';
import Loads from 'react-loads'
import axios from 'axios';
import { Link } from '@reach/router';

import GeneralSectionContainer from '../GeneralSectionContainer'
import {ITEM_TYPES} from '../../_types/item_types'

export default class SpeciesContainer extends Component {

  fetchSpecies = async () => {
    const response = await axios.get(
      'https://swapi.co/api/species/'
    );
    return response.data;
  }

  updateSpecies = async ( nextPageUrl ) => {
    const response = await axios.get(
      nextPageUrl
    );
    return response.data;
  }

  render = () => {
    const contextKey = 'species'
    return (
      <Fragment>
        <Link to="/">Back</Link>
        <div>Species</div>
        <Loads contextKey={contextKey} loadOnMount load={this.fetchSpecies} update={this.updateSpecies}>
          {({ load, update, isLoading, isSuccess, isError, error, response }) => (
            <GeneralSectionContainer 
              contextKey = {contextKey}
              itemType = {ITEM_TYPES.SPECIES}
              response = {response}
              update = {update}
              isLoading = {isLoading} 
              isSuccess = {isSuccess}
              isError = {isError}
              error = {error}
            />
          )}
        </Loads>
      </Fragment>      
    );
  };
}