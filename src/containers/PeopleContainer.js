import React, { Component, Fragment } from 'react';
import {createLoader} from 'react-loads'
import axios from 'axios';

import ListItem from '../components/ListItem'
import {ITEM_TYPES} from '../_types/item_types'

export default class PeopleContainer extends Component {

  fetchPeople = async () => {
    const response = await axios.get(
      'https://swapi.co/api/people/'
    );
    console.log("About to return");
    return response.data.results;
  }

  render = () => {
    const FetchPeople = createLoader({
      contextKey: "planets",
      load: this.fetchPeople,
      loadOnMount: true
    })
    return (
      <Fragment>
        <div>People</div>
        <FetchPeople>
          <FetchPeople.Loading>
            <p>Loading...</p>
          </FetchPeople.Loading>
          <FetchPeople.Success>
            {({response: people}) => (
              <Fragment>
                {people.length === 0 && (
                  <div>No people</div>
                )}
                {people.map(person => (
                  <Fragment>
                    <ListItem itemType={ITEM_TYPES.PEOPLE} item={person}/>
                  </Fragment>                  
                ))}
              </Fragment>
            )}
          </FetchPeople.Success>
        </FetchPeople>
      </Fragment>      
    );
  };
}