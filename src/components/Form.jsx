import React, {useState} from 'react'
import PropTypes from 'prop-types'
import shortid from 'shortid'
import Error from './Error'

const Form = ({saveExpense, setCreateExpense}) => {
    const [name, setName ] = useState('')
    const [quantity, setQuantity] = useState(0);
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('There was an error')
    const addExpense = e =>{
        e.preventDefault()

        // Validation
        if(quantity < 1 || isNaN(quantity)){
            setError(true);
            setErrorMessage('Invalid expense value')
            return;
        } else if(name.trim() === ''){
            setError(true);
            setErrorMessage('Both fields are required')
            return;
        }
        setError(false);
        // Construct expense
        const expense = {
            name,
            quantity,
            id: shortid.generate()
        }
        // Pass expense to parent component
        saveExpense(expense);
        setCreateExpense(true);
        // Reset form
        setName('')
        setQuantity(0);
    }
    return (
        <form
         onSubmit={addExpense}
        >
            <h2>Add your expenses here</h2>
            { error ? <Error message={errorMessage}/> : null }
            <div className="campo">
                <label>Expense name</label>
                <input
                 type="text"
                 className="u-full-width"
                 placeholder="Ex. Transportation"
                 value={name}
                 onChange={({target:{value}}) => setName(value)}
                 />
            </div>
            <div className="campo">
                <label>Expense quantity</label>
                <input
                 type="number"
                 className="u-full-width"
                 placeholder="Ex. 300"
                 value={quantity}
                 onChange={({target:{value}}) => setQuantity(parseInt(value))}
                 />
            </div>
            <input 
             type="submit"
             className="button-primary u-full-width"
             value="Add expense"
             />
        </form>
    )
}
Form.propTypes = {
    saveExpense: PropTypes.func.isRequired,
    setCreateExpense: PropTypes.func.isRequired,
}
export default Form;
