import React, { Component } from 'react';
import { Link } from '@reach/router';

class Index extends Component {
	render() {
		return (
			<div>
				<div>StarWars Wiki</div>
				<div><Link to='/people'>People</Link></div>
				<div><Link to='/films'>Films</Link></div>
				<div><Link to='/planets'>Planets</Link></div>
				<div><Link to='/species'>Species</Link></div>
				<div><Link to='/starships'>Starships</Link></div>
				<div><Link to='/vehicles'>Vehicles</Link></div>
			</div>      
		);
	}
}

export default Index;
