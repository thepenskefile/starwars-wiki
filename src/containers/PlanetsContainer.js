import React, { Component, Fragment } from 'react';
import Loads from 'react-loads'
import axios from 'axios';
import { Link } from '@reach/router';

import ListItem from '../components/ListItem'
import {ITEM_TYPES} from '../_types/item_types'

export default class PlanetsContainer extends Component {

  fetchPlanets = async () => {
    const response = await axios.get(
      'https://swapi.co/api/planets/'
    );
    return response.data.results;
  }
  
  render = () => {
    return (
      <Fragment>
        <Link to="/">Back</Link>
        <div>Planets</div>
        <Loads contextKey="planets" loadOnMount load={this.fetchPlanets}>
          {({ isLoading, isSuccess, isError, error, response }) => (
          <Fragment>
            {isLoading && <div>Loading...</div>}
            {isSuccess && (
              <Fragment>
                {response.length === 0 && (
                  <div>No planets</div>
                )}
                {response.map(planet => (
                  <ListItem key={planet.name} itemType={ITEM_TYPES.PLANETS} item={planet}/>
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