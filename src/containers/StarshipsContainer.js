import React, { Component, Fragment } from 'react';
import Loads from 'react-loads'
import axios from 'axios';
import { Link } from '@reach/router';

import ListItem from '../components/ListItem'
import {ITEM_TYPES} from '../_types/item_types'

export default class starshipsContainer extends Component {

  fetchStarships = async () => {
    const response = await axios.get(
      'https://swapi.co/api/starships/'
    );
    return response.data.results;
  }
  
  render = () => {
    return (
      <Fragment>
        <Link to="/">Back</Link>
        <div>Starships</div>
        <Loads contextKey="planets" loadOnMount load={this.fetchStarships}>
          {({ isLoading, isSuccess, isError, error, response }) => (
          <Fragment>
            {isLoading && <div>Loading...</div>}
            {isSuccess && (
              <Fragment>
                {response.length === 0 && (
                  <div>No starships</div>
                )}
                {response.map(starship => (
                  <ListItem key={starship.name} itemType={ITEM_TYPES.STARSHIPS} item={starship}/>
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