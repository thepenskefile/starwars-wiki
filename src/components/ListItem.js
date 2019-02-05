// @flow
import React from 'react';
import { Link } from '@reach/router';
import { ITEM_TYPES } from '../_types/item_types';

import Card from '../ui/Card';

type Props = {
  itemType: string,
  item: Object
};

const ListItem = ({ itemType, item }: Props) => (
  <Link to={`/${itemType}/${item.url.replace(/^\D+/g, '')}`}>
    <Card>{itemType === ITEM_TYPES.FILMS ? item.title : item.name}</Card>
  </Link>
);

export default ListItem;
