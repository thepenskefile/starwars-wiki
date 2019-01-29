import React, { Component, Fragment } from 'react';
import Loads from 'react-loads'
import axios from 'axios';
import { Link } from '@reach/router';
import { Spinner, Box } from 'fannypack'

class PersonItemContainer extends Component {
    fetchPerson = async () => {
        const { id } = this.props;
        const response = await axios.get(
            `https://cors-anywhere.herokuapp.com/https://swapi.co/api/people/${id}`
        )
        return response.data;
    }
    render = () => {
        const { id } = this.props;
        return (
            <Fragment>
                <Link to="/people">Back</Link>
                <Loads contextKey={`person.${id}`} loadOnMount load={this.fetchPerson}>
                    {({ isLoading, isSuccess, isError, error, response }) => (
                        <Fragment>
                            {isLoading && <Spinner size='large' />}
                            {isSuccess && (
                                <Box>
                                    <div>{response.name}</div>
                                    <div>Height: {response.height}</div>
                                    <div>Mass: {response.mass}</div>
                                    <div>Hair Colour: {response.hair_color}</div>
                                    <div>Eye Colour: {response.eye_color}</div>
                                    <div>Birth year: {response.birth_year}</div>
                                    <div>Gender: {response.gender}</div>                                    
                                </Box>                                 
                            )}
                            {isError && <div>An error occurred! {error.message}</div>}
                        </Fragment>
                    )}                    
                </Loads>
            </Fragment>   
        );
    }
}

export default PersonItemContainer;
