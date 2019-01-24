import React, { Component, Fragment } from 'react';
import Loads from 'react-loads'
import axios from 'axios';
import { Link } from '@reach/router';

import ListItem from '../components/ListItem'
import {ITEM_TYPES} from '../_types/item_types'

export default class PeopleContainer extends Component {

  fetchPeople = async () => {
    const response = await axios.get(
      'https://swapi.co/api/people/'
    );
    return response.data.results;
  }

  render = () => {
    return (
      <Fragment>
        <Link to="/">Back</Link>
        <div>People</div>
        <Loads contextKey="people" loadOnMount load={this.fetchPeople}>
          {({ isLoading, isSuccess, isError, error, response }) => (
          <Fragment>
            {isLoading && <div>Loading...</div>}
            {isSuccess && (
              <Fragment>
                {response.length === 0 && (
                  <div>No people</div>
                )}
                {response.map(person => (
                  <ListItem key={person.name} itemType={ITEM_TYPES.PEOPLE} item={person}/>
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