import React, { Component, Fragment } from 'react';

import ListItem from '../components/ListItem';
import Pagination from '../ui/PreviousNextButtons';
import { ITEM_TYPES } from '../_types/item_types';
import MainHeading from '../ui/MainHeading';

import { Spinner } from 'fannypack';
import BackButton from '../ui/BackButton';

type Props = {
  contextKey: string,
  itemType: string,
  response: Object,
  update: Function,
  isLoading: Boolean,
  isSuccess: Boolean,
  isError: Bopolean,
  error: string,
  heading: string
};

export default class GeneralSectionContainer extends Component<Props> {
  render = () => {
    const { contextKey, itemType, response, update, isLoading, isSuccess, isError, error, heading } = this.props;

    return (
      <Fragment>
        <BackButton to="/" />
        <MainHeading>{heading}</MainHeading>
        <Fragment>
          {isLoading && <Spinner size="large" color="#ffd700" />}
          {isSuccess && (
            <Fragment>
              {response.results.length === 0 && <div>No {contextKey}</div>}
              {response.results.map(item => (
                <ListItem
                  key={itemType === ITEM_TYPES.FILMS ? item.title : item.name}
                  itemType={itemType}
                  item={item}
                />
              ))}
              <Pagination backPage={response.previous} nextPage={response.next} onClick={update} itemType={itemType} />
            </Fragment>
          )}
          {isError && <div>An error occurred! {error.message}</div>}
        </Fragment>
      </Fragment>
    );
  };
}
