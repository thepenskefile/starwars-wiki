import React, { Component, Fragment } from 'react';
import Loads from 'react-loads'
import axios from 'axios';
import { Link } from '@reach/router';

import ListItem from '../components/ListItem'
import Pagination from './Pagination'
import {ITEM_TYPES} from '../_types/item_types'

export default class VehiclesContainer extends Component {

  fetchVehicles = async ( ) => {
    const response = await axios.get(
      `https://swapi.co/api/vehicles/`
    );
    return response.data;
  }

  updateVehicles = async ( page ) => {
    const response = await axios.get(
      `https://swapi.co/api/vehicles/?page=${page}`      
    );
    return response.data;
  }
  
  render = () => {

    function ShowPageButtons (props) {
      const response = props.response;
      var showNext;
      var showBack;
      var nextPage;
      var backPage;
      if(response.next === null){
        showNext = false
      }
      else{
        showNext = true
        if(response.next){
          nextPage = response.next.replace( /^\D+/g, '');
        }
      }

      if(response.previous === null){
        showBack = false
      }
      else{
        showBack = true
        if(response.previous){
          backPage = response.previous.replace( /^\D+/g, '');
        }
      }

      return(
        <Pagination showBack={showBack} showNext={showNext} backPage={backPage} nextPage={nextPage} onClick={props.load}/>
      );
    }

    return (
      <Fragment>
        <Link to="/">Back</Link>
        <div>Vehicles</div>
        <Loads contextKey="vehicles" loadOnMount load={this.fetchVehicles} update={this.updateVehicles}>
          {({ load, update, isLoading, isSuccess, isError, error, response }) => (
          <Fragment>
            {isLoading && <div>Loading...</div>}
            {isSuccess && (
              <Fragment>
                {response.results.length === 0 && (
                  <div>No vehicles</div>
                )}
                {response.results.map(vehicle => (
                  <ListItem key={vehicle.name} itemType={ITEM_TYPES.VEHICLES} item={vehicle}/>
                ))}
                <ShowPageButtons response={response} load={update}/>
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