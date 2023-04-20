import React from 'react';
import PropTypes from 'prop-types'

interface ListItemProps {
    title?: string
    descr?: string
}

const ListItem = (props: ListItemProps) => {

    const { title, descr } = props

    return (
        <div data-test='ListItemComponent'>
            {title ? <h2 data-test='componentTitle'>{title}</h2> : null}

            <div data-test='description'>{descr}</div>
        </div>
    );
};

ListItem.propTypes = {
    title: PropTypes.string,
    descr: PropTypes.string,
};



export default ListItem;