import React from 'react';
import { render } from 'react-dom'
import App from './containers/App'
import * as serviceWorker from './serviceWorker'
import {LoadsProvider} from 'react-loads'
import { Router } from '@reach/router'
import { ThemeProvider } from 'fannypack'
import PeopleContainer from './containers/PeopleContainer'
import FilmsContainer from './containers/FilmsContainer'
import PlanetsContainer from './containers/PlanetsContainer'
import SpeciesContainer from './containers/SpeciesContainer'
import StarshipsContainer from './containers/StarshipsContainer'
import VehiclesContainer from './containers/VehiclesContainer'
import PlanetItemContainer from './containers/PlanetItemContainer'

render(
    
    <LoadsProvider>
        <ThemeProvider>
            <Router>
                <App path='/'/>
                <PeopleContainer path='/people'/>
                <FilmsContainer path='/films'/>
                <PlanetsContainer path='/planets'/>
                <PlanetItemContainer path='/planets/:id'/>
                <SpeciesContainer path='/species'/>
                <StarshipsContainer path='/starships'/>
                <VehiclesContainer path='/vehicles'/>
            </Router>
        </ThemeProvider>
    </LoadsProvider>,        
       
    document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
