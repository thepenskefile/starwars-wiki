import React, { Component, Fragment } from 'react';
import Loads from 'react-loads'
import axios from 'axios';
import { Link } from '@reach/router';

import GeneralSectionContainer from '../GeneralSectionContainer'
import {ITEM_TYPES} from '../../_types/item_types'

export default class PeopleContainer extends Component {

  fetchPeople = async () => {
    const response = await axios.get(
      'https://swapi.co/api/people/'
    );
    return response.data;
  }

  updatePeople = async ( nextPageUrl ) => {
    const response = await axios.get(
      nextPageUrl   
    );
    return response.data;
  }

  render = () => {
    const contextKey = 'people'
    return (
      <Fragment>
        <Link to="/">Back</Link>
        <div>People</div>
        <Loads contextKey={contextKey} loadOnMount load={this.fetchPeople} update={this.updatePeople}>
        {({ load, update, isLoading, isSuccess, isError, error, response }) => (
            <GeneralSectionContainer 
              contextKey = {contextKey}
              itemType = {ITEM_TYPES.PEOPLE}
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