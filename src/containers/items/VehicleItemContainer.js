import React, { Component, Fragment } from 'react'
import Loads from 'react-loads'
import axios from 'axios'
import BackButton from '../../ui/BackButton'
import { Spinner, Box } from 'fannypack'
import ItemDetails from '../ItemDetails'

class VehicleItemContainer extends Component {
    fetchVehicle = async () => {
      const { id } = this.props
      const response = await axios.get(
        `https://cors-anywhere.herokuapp.com/https://swapi.co/api/vehicles/${id}`
      )
      return response.data
    }
    render = () => {
      const { id } = this.props
      return (
        <Fragment>
          <BackButton to="/vehicles"/>
          <Loads contextKey={`vehicle.${id}`} loadOnMount load={this.fetchVehicle}>
            {({ isLoading, isSuccess, isError, error, response }) => (
              <Fragment>
                {isLoading && <Box><Spinner size='large' marginTop='10px' color='#ffd700'/></Box>}
                {isSuccess && (
                  <ItemDetails 
                    title = {response.name}
                    data = {{
                      'Model': response.model ? response.model : 'N/A',
                      'Manufacturer': response.manufacturer ? response.manufacturer : 'N/A',
                      'Cost (in credits)': response.cost_in_credits ? response.cost_in_credits : 'N/A',
                      'Max atmospheric speed': response.max_atmospheric_speed ? response.max_atmospheric_speed : 'N/A',
                      'Crew': response.crew ? response.crew : 'N/A',
                      'Passengers': response.passengers ? response.passengers : 'N/A',
                      'Cargo capacity': response.cargo_capacity ? response.cargo_capacity : 'N/A',
                      'Hyperdrive rating': response.hyperdrive_rating ? response.hyperdrive_rating : 'N/A',
                      'Vehicle class': response.vehicle_class ? response.vehicle_class : 'N/A'
                    }}                                
                  />                               
                )}
                {isError && <div>An error occurred! {error.message}</div>}
              </Fragment>
            )}                    
          </Loads>
        </Fragment>   
      )
    }
}

export default VehicleItemContainer
