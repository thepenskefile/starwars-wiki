import React, { Component, Fragment } from 'react';
import Loads from 'react-loads'
import axios from 'axios';
import { Link } from '@reach/router';

import GeneralSectionContainer from '../GeneralSectionContainer'
import {ITEM_TYPES} from '../../_types/item_types'

export default class VehiclesContainer extends Component {

  fetchVehicles = async ( ) => {
    const response = await axios.get(
      `https://swapi.co/api/vehicles/`
    );
    return response.data;
  }

  updateVehicles = async ( nextPageUrl ) => {
    const response = await axios.get(
      nextPageUrl      
    );
    return response.data;
  }
  
  render = () => {
    const contextKey = 'vehicles';
    return (
      <Fragment>
        <Link to="/">Back</Link>
        <div>Vehicles</div>
        <Loads contextKey={contextKey} loadOnMount load={this.fetchVehicles} update={this.updateVehicles}>
          {({ load, update, isLoading, isSuccess, isError, error, response }) => (
            <GeneralSectionContainer 
              contextKey = {contextKey}
              itemType = {ITEM_TYPES.VEHICLES}
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