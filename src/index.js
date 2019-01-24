import React from 'react';
import { render } from 'react-dom';
import Index from './containers/Index';
import * as serviceWorker from './serviceWorker';
import {LoadsProvider} from 'react-loads';
import { Router } from '@reach/router';
import { ThemeProvider } from 'fannypack';
import PeopleContainer from './containers/PeopleContainer';
import FilmsContainer from './containers/FilmsContainer';
import PlanetsContainer from './containers/PlanetsContainer';
import SpeciesContainer from './containers/SpeciesContainer';
import StarshipsContainer from './containers/StarshipsContainer';
import VehiclesContainer from './containers/VehiclesContainer';

import PlanetItemContainer from './containers/items/PlanetItemContainer';
import PersonItemContainer from './containers/items/PersonItemContainer'
import FilmItemContainer from './containers/items/FilmItemContainer'
import SpeciesItemContainer from './containers/items/SpeciesItemContainer'
import StarshipItemContainer from './containers/items/StarshipItemContainer'
import VehicleItemContainer from './containers/items/VehicleItemContainer'

render(    
	<LoadsProvider>
		<ThemeProvider>
			<Router>
				<Index path='/'/>
				<PeopleContainer path='/people'/>
                <PersonItemContainer path='/people/:id'/>
				<FilmsContainer path='/films'/>
                <FilmItemContainer path='/films/:id'/>
				<PlanetsContainer path='/planets'/>
				<PlanetItemContainer path='/planets/:id'/>
				<SpeciesContainer path='/species'/>
                <SpeciesItemContainer path='/species/:id'/>
				<StarshipsContainer path='/starships'/>
                <StarshipItemContainer path='/starships/:id'/>
				<VehiclesContainer path='/vehicles'/>
                <VehicleItemContainer path='/vehicles/:id'/>
			</Router>
		</ThemeProvider>
	</LoadsProvider>,        
       
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
