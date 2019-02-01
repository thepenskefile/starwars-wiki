import React, { Component, Fragment } from 'react';
import Loads from 'react-loads'
import axios from 'axios';
import { Spinner, Box, Tooltip } from 'fannypack'
import BackButton from '../../ui/BackButton';
import ItemGrid from '../ItemGrid';

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
                <BackButton to="/people"/>
                <Loads contextKey={`person.${id}`} loadOnMount load={this.fetchPerson}>
                    {({ isLoading, isSuccess, isError, error, response }) => (
                        <Fragment>                           
                            {isLoading && <Box><Spinner marginTop='10px' size='large' color='#ffd700'/></Box>}
                            {isSuccess && (
                                <ItemGrid 
                                    title = {response.name}
                                    data = {{
                                        'Height': response.height ? response.height : 'N/A',
                                        'Mass': response.mass ? response.mass : 'N/A',
                                        'Hair colour': response.hair_color ? response.hair_color : 'N/A',
                                        'Eye colour': response.eye_color ? response.eye_color : 'N/A',
                                        'Birth year': response.birth_year ? response.birth_year : 'N/A'
                                    }}                                
                                />                            
                            )}
                            {isError && <Box>An error occurred! {error.message}</Box>}
                        </Fragment>
                    )}                    
                </Loads>
            </Fragment>   
        );
    }
}

export default PersonItemContainer;
