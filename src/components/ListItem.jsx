import React from 'react'
import PropTypes from 'prop-types'

const ListItem = ({expense: {name, quantity}}) => (
    <li className="gastos">
        <p>
            {name}
            <span className="gasto">$ {quantity}</span>
        </p>
    </li>
)
ListItem.propTypes = {
    expense: PropTypes.object.isRequired,
}
export default ListItem
