import React from 'react';
import PropTypes from 'prop-types';
import { Link } from '@reach/router'
import {ITEM_TYPES} from '../_types/item_types'

import Card from '../ui/Card'

const ListItem = ({ itemType, item }) =>  (
	<Link to={ `/${itemType}/${item.url.replace( /^\D+/g, '')}`}>
		<Card>
			{itemType === ITEM_TYPES.FILMS ? item.title : item.name}
		</Card>
	</Link>
)
ListItem.propTypes = {
    itemType: PropTypes.string,
    item: PropTypes.object
}
export default ListItem;