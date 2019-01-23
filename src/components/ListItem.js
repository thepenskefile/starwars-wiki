import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from '@reach/router'

const ListItem = ({ itemType, item }) =>  (
    <Link to={ `/${itemType}/${item.url.replace( /^\D+/g, '')}`}>
        <div>
            {item.name}
        </div>
    </Link>
)
ListItem.propTypes = {
    itemType: PropTypes.string,
    item: PropTypes.object
}
export default ListItem;