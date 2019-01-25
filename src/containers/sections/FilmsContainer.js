import React, { Component, Fragment } from 'react';
import Loads from 'react-loads'
import axios from 'axios';
import { Link } from '@reach/router';

import GeneralSectionContainer from '../GeneralSectionContainer'
import {ITEM_TYPES} from '../../_types/item_types'

export default class FilmsContianer extends Component {

  fetchFilms = async () => {
    const response = await axios.get(
      'https://swapi.co/api/films/'
    );
    return response.data;
  }

  updateFilms = async ( nextPageUrl ) => {
    const response = await axios.get(
      nextPageUrl      
    );
    return response.data;
  }
  
  render = () => {
    const contextKey = 'films';
    return (
      <Fragment>
        <Link to="/">Back</Link>
        <div>Films</div>
        <Loads contextKey={contextKey} loadOnMount load={this.fetchFilms} update={this.updateFilms}>
          {({ load, update, isLoading, isSuccess, isError, error, response }) => (
          <GeneralSectionContainer 
          contextKey = {contextKey}
          itemType = {ITEM_TYPES.FILMS}
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