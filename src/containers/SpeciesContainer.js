import React, { Component, Fragment } from 'react';
import Loads from 'react-loads'
import axios from 'axios';
import { Link } from '@reach/router';

import ListItem from '../components/ListItem'
import {ITEM_TYPES} from '../_types/item_types'

export default class SpeciesContainer extends Component {

  fetchSpecies = async () => {
    const response = await axios.get(
      'https://swapi.co/api/species/'
    );
    return response.data.results;
  }
  
  render = () => {
    return (
      <Fragment>
        <Link to="/">Back</Link>
        <div>Species</div>
        <Loads contextKey="species" loadOnMount load={this.fetchSpecies}>
          {({ isLoading, isSuccess, isError, error, response }) => (
          <Fragment>
            {isLoading && <div>Loading...</div>}
            {isSuccess && (
              <Fragment>
                {response.length === 0 && (
                  <div>No species</div>
                )}
                {response.map(species => (
                  <ListItem key={species.name} itemType={ITEM_TYPES.SPECIES} item={species}/>
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