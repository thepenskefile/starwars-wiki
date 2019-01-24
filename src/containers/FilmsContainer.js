import React, { Component, Fragment } from 'react';
import Loads from 'react-loads'
import axios from 'axios';
import { Link } from '@reach/router';

import ListItem from '../components/ListItem'
import {ITEM_TYPES} from '../_types/item_types'

export default class FilmsContianer extends Component {

  fetchFilms = async () => {
    const response = await axios.get(
      'https://swapi.co/api/films/'
    );
    return response.data.results;
  }
  
  render = () => {
    return (
      <Fragment>
        <Link to="/">Back</Link>
        <div>Films</div>
        <Loads contextKey="films" loadOnMount load={this.fetchFilms}>
          {({ isLoading, isSuccess, isError, error, response }) => (
          <Fragment>
            {isLoading && <div>Loading...</div>}
            {isSuccess && (
              <Fragment>
                {response.length === 0 && (
                  <div>No films</div>
                )}
                {response.map(film => (
                  <ListItem key={film.title} itemType={ITEM_TYPES.FILMS} item={film}/>
                ))}
              </Fragment>              
            )}            
            {isError && <div>An error occurred! {error.message}</div>}
          </Fragment>
        )}
        </Loads>
      </Fragment>      
    );
  };
}