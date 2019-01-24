import React, { Component, Fragment } from "react";
import PropTypes from 'prop-types';
import {Button} from 'fannypack'
export default class Pagination extends Component {
  render = () => {
    const {
      onClick,
      showBack,
      showNext,
      backPage,
      nextPage
    } = this.props;
    return (
      <Fragment>
            {showBack && <Button onClick={() => onClick(backPage)}>Back</Button>}
            {showNext && <Button onClick={() => onClick(nextPage)}>Next</Button>}
      </Fragment>
    );
  };
}

Pagination.propTypes = {
    onClick: PropTypes.func,
    showBack: PropTypes.bool,
    showNext: PropTypes.bool,
    backPage: PropTypes.string,
    nextPage: PropTypes.string
}