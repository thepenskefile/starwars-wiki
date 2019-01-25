import React, { Component, Fragment } from 'react';
import Loads from 'react-loads'
import axios from 'axios';
import { Link } from '@reach/router';

import GeneralSectionContainer from '../GeneralSectionContainer'
import {ITEM_TYPES} from '../../_types/item_types'

export default class PlanetsContainer extends Component {

  fetchPlanets = async () => {
    const response = await axios.get(
      'https://swapi.co/api/planets/'
    );
    return response.data;
  }

  updatePlanets = async ( nextPageUrl ) => {
    const response = await axios.get(
      nextPageUrl
    );
    return response.data;
  }
  
  render = () => {
    const contextKey = 'planets';
    return (
      <Fragment>
        <Link to="/">Back</Link>
        <div>Planets</div>
        <Loads contextKey={contextKey} loadOnMount load={this.fetchPlanets} update={this.updatePlanets}>
          {({ load, update, isLoading, isSuccess, isError, error, response }) => (
            <GeneralSectionContainer 
              contextKey = {contextKey}
              itemType = {ITEM_TYPES.PLANETS}
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