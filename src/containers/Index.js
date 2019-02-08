// @flow
import React, { Component, Fragment } from 'react';
import { Link } from '@reach/router';
import Card from '../ui/Card';

type Props = {}

class Index extends Component<Props> {
  render() {
    return (
      <Fragment>
        <Link to="/people">
          <Card>People</Card>
        </Link>
        <Link to="/films">
          <Card>Films</Card>
        </Link>
        <Link to="/planets">
          <Card>Planets</Card>
        </Link>
        <Link to="/species">
          <Card>Species</Card>
        </Link>
        <Link to="/starships">
          <Card>Starships</Card>
        </Link>
        <Link to="/vehicles">
          <Card>Vehicles</Card>
        </Link>
      </Fragment>
    );
  }
}

export default Index;
