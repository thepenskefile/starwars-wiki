import React, { Component, Fragment } from 'react';
import Loads from 'react-loads'
import axios from 'axios';
import BackButton from '../../ui/BackButton';
import { Spinner, Box, Grid } from 'fannypack';
import GridItem from '../../ui/GridItem';

class VehicleItemContainer extends Component {
    fetchVehicle = async () => {
        const { id } = this.props;
        const response = await axios.get(
            `https://cors-anywhere.herokuapp.com/https://swapi.co/api/vehicles/${id}`
        )
        return response.data;
    }
    render = () => {
        const { id } = this.props;
        return (
            <Fragment>
                <BackButton to="/vehicles"/>
                <Loads contextKey={`vehicle.${id}`} loadOnMount load={this.fetchVehicle}>
                    {({ isLoading, isSuccess, isError, error, response }) => (
                        <Fragment>
                            {isLoading && <Box><Spinner size='large' color='#ffd700'/></Box>}
                            {isSuccess && (
                                <Grid templateColumns="repeat(2, 1fr)" fontSize='25px' autoRows="auto" margin='auto'>
                                    <GridItem columnStart='1' columnEnd='3'><strong>{response.name}</strong></GridItem>
                                    <GridItem isTinted isLeft>Model</GridItem>
                                    <GridItem isTinted isRight>{response.model}</GridItem>
                                    <GridItem>Manufacturer</GridItem>
                                    <GridItem>{response.manufacturer}</GridItem>
                                    <GridItem isTinted isLeft>Cost (in credits)</GridItem>
                                    <GridItem isTinted isRight>{response.cost_in_credits}</GridItem>
                                    <GridItem>Max atmospheric speed</GridItem>
                                    <GridItem>{response.max_atmospheric_speed}</GridItem>
                                    <GridItem isTinted isLeft>crew</GridItem>
                                    <GridItem isTinted isRight>{response.crew}</GridItem>
                                    <GridItem>Passengers</GridItem>
                                    <GridItem>{response.passengers}</GridItem>
                                    <GridItem isTinted isLeft>Cargo capacity</GridItem>
                                    <GridItem isTinted isRight>{response.cargo_capacity}</GridItem>
                                    <GridItem>Vehicle class</GridItem>
                                    <GridItem>{response.vehicle_class}</GridItem>
                                </Grid>                                 
                            )}
                            {isError && <div>An error occurred! {error.message}</div>}
                        </Fragment>
                    )}                    
                </Loads>
            </Fragment>   
        );
    }
}

export default VehicleItemContainer;
