import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Error from './Error'
const BudgetRequest = ({ saveBudget, saveRest, updateRequest }) => {

    const [quantity, setQuantity ] = useState(0);
    const [error, setError] = useState(false);

    const defineQuantity = ({target: {value}}) =>{
        setQuantity(parseInt(value,10))
    }
    const addQuantity = e =>{
        e.preventDefault();
        if(quantity < 1 || isNaN(quantity)){
            setError(true);
            return;
        }
        setError(false);
        saveBudget(quantity);
        saveRest(quantity);
        updateRequest(false)
    }
    return (
        <>
            <h2>Set your budget</h2>
            { error ?  <Error message="Invalid budget"></Error> : null}
            <form
            onSubmit={addQuantity}>
                <input 
                type="number"
                className="u-full-width"
                placeholder="Budget"
                onChange={defineQuantity}
                />
                <input 
                type="submit" 
                value="Set budget" 
                className="button-primary u-full-width"
                />
            </form>
        </>
    )
}
BudgetRequest.propTypes = {
    saveBudget: PropTypes.func.isRequired,
    saveRest: PropTypes.func.isRequired,
    updateRequest: PropTypes.func.isRequired,
}
export default BudgetRequest
