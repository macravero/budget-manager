import React from 'react'
import PropTypes from 'prop-types'
import { checkBudget } from '../helpers'
const BudgetControl = ({budget, rest}) => {
    return (
        <>
        <div className="alert alert-primary">
            Budget: $ {budget}
        </div>
        <div className={checkBudget(budget, rest)}>
            Remaining: $ {rest}
        </div>
        </>
    )
}
BudgetControl.propTypes = {
    budget: PropTypes.number.isRequired,
    rest: PropTypes.number.isRequired,
}
export default BudgetControl
