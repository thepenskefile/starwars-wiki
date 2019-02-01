import React, { Component, Fragment } from 'react';
import Loads from 'react-loads'
import axios from 'axios';
import BackButton from '../../ui/BackButton';
import { Spinner, Box } from 'fannypack';
import ItemGrid from '../ItemGrid';

class SpeciesItemContainer extends Component {
    fetchSpecies = async () => {
        const { id } = this.props;
        const response = await axios.get(
            `https://cors-anywhere.herokuapp.com/https://swapi.co/api/species/${id}`
        )
        return response.data;
    }
    render = () => {
        const { id } = this.props;
        return (
            <Fragment>
                <BackButton to="/species"/>
                <Loads contextKey={`species.${id}`} loadOnMount load={this.fetchSpecies}>
                    {({ isLoading, isSuccess, isError, error, response }) => (
                        <Fragment>
                            {isLoading && <Box><Spinner size='large' color='#ffd700'/></Box>}
                            {isSuccess && (
                                <ItemGrid 
                                    title = {response.name}
                                    data = {{
                                        'Classification': response.classification ? response.classification : 'N/A',
                                        'Designation': response.designation ? response.designation : 'N/A',
                                        'Average Height': response.average_height ? response.average_height : 'N/A',
                                        'Skin colours': response.skin_colors ? response.skin_colors : 'N/A',
                                        'Hair colours': response.hair_colors ? response.hair_colors : 'N/A',
                                        'Eye colours': response.eye_colors ? response.eye_colors : 'N/A',
                                        'Average lifespan': response.average_lifespan ? response.average_lifespan : 'N/A',
                                        'Language': response.language ? response.language : 'N/A'
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

export default SpeciesItemContainer;
