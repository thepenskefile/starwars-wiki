import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import ListItem from '../components/ListItem'
import Pagination from './Pagination'
import {ITEM_TYPES} from '../_types/item_types'

export default class GeneralSectionContainer extends Component {

  render = () => {

    const {
        contextKey,
        itemType,
        response,
        update,
        isLoading, 
        isSuccess,
        isError,
        error
      } = this.props;

    return (
      <Fragment>
          <Fragment>
            {isLoading && <div>Loading...</div>}
            {isSuccess && (
              <Fragment>
                {response.results.length === 0 && (
                  <div>No {contextKey}</div>
                )}
                {response.results.map(item => (
                  <ListItem key={itemType === ITEM_TYPES.FILMS ? item.title : item.name} itemType={itemType} item={item}/>
                ))}
                <Pagination
                  backPage={response.previous}
                  nextPage={response.next}
                  onClick={update}
                />
              </Fragment>           
            )}            
            {isError && <div>An error occurred! {error.message}</div>}
          </Fragment>

      </Fragment>      
    );
  };
}

Pagination.propTypes = {
    contextKey: PropTypes.string,
    key: PropTypes.string,
    itemType: PropTypes.string,
    response: PropTypes.object,
    update: PropTypes.func,
    isLoading: PropTypes.bool, 
    isSuccess: PropTypes.bool,
    isError: PropTypes.bool,
    error: PropTypes.string
}