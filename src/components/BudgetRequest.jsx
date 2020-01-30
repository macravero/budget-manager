import React, { useState } from 'react'
import Error from './Error'
const BudgetRequest = () => {

    const [budget, setBudget ] = useState(0);
    const [error, setError] = useState(false);

    const defineBudget = ({target: {value}}) =>{
        setBudget(parseInt(value,10))
    }
    const addBudget = e =>{
        e.preventDefault();
        if(budget < 1 || isNaN(budget)){
            setError(true);
            return;
        }
        setError(false);
    }
    return (
        <>
            <h2>Set your budget</h2>
            { error ?  <Error message="Invalid budget"></Error> : null}
            <form
            onSubmit={addBudget}>
                <input 
                type="number"
                className="u-full-width"
                placeholder="Budget"
                onChange={defineBudget}
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
export default BudgetRequest
