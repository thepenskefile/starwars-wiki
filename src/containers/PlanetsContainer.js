import React, { Component, Fragment } from 'react';
import {createLoader} from 'react-loads'
import axios from 'axios';

import ListItem from '../components/ListItem'
import {ITEM_TYPES} from '../_types/item_types'

export default class PlanetsContainer extends Component {

  fetchPlanets = async () => {
    const response = await axios.get(
      'https://swapi.co/api/planets/'
    );
    console.log("About to return");
    return response.data.results;
  }

  render = () => {
    const FetchPlanets = createLoader({
      contextKey: "planets",
      load: this.fetchPlanets,
      loadOnMount: true
    })
    return (
      <Fragment>
        <div>Planets</div>
        <FetchPlanets>
          <FetchPlanets.Loading>
            <p>Loading...</p>
          </FetchPlanets.Loading>
          <FetchPlanets.Success>
            {({response: planets}) => (
              <Fragment>
                {planets.length === 0 && (
                  <div>No planets</div>
                )}
                {planets.map(planet => (
                  <Fragment>
                    <ListItem itemType={ITEM_TYPES.PLANETS} item={planet}/>
                  </Fragment>                  
                ))}
              </Fragment>
            )}
          </FetchPlanets.Success>
        </FetchPlanets>
      </Fragment>      
    );
  };
}