import React, { Component, Fragment } from "react";
import PropTypes from 'prop-types';
import {Button} from 'fannypack'

export default class Pagination extends Component {
  render = () => {
    const {
      onClick,
      backPage,
      nextPage
    } = this.props;
    return (
      <Fragment>
            {backPage !== null && <Button onClick={() => onClick(backPage)}>Previous</Button>}
            {nextPage !== null && <Button onClick={() => onClick(nextPage)}>Next</Button>}
      </Fragment>
    );
  };
}

Pagination.propTypes = {
    onClick: PropTypes.func,
    backPage: PropTypes.string,
    nextPage: PropTypes.string
}