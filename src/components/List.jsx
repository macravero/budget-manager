import React from 'react'
import ListItem from './ListItem'
import PropTypes from 'prop-types'
const List = ({expenses}) => {
    return (
        <div className="gastos-realizados">
            <h2>Expenses list</h2>
            {expenses.map(expense =>(
                <ListItem 
                 expense= {expense}
                 key={expense.id}
                />
            ))}
        </div>
    )
}

List.propTypes = {
    expenses: PropTypes.array.isRequired,
}
export default List
