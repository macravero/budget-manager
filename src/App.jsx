import React, { useState, useEffect } from 'react';
import BudgetRequest from './components/BudgetRequest'
import Form from './components/Form'
import List from './components/List'
import BudgetControl from './components/BudgetControl'

function App() {

    // define budget
    const [ budget, saveBudget ] = useState(0);
    const [ rest, saveRest ] = useState(0);
    const [ showRequest, updateRequest ] = useState(true);
    const [expenses, saveExpenses ] = useState([]);
    const [expense, saveExpense ] = useState({});
    const [createExpense, setCreateExpense] = useState(false);

    // update rest
    useEffect(() =>{
        if(createExpense){ 
            
            // add new expense
            saveExpenses([
                ...expenses,
                expense
            ]);
            // remove from current budget
            const remaining = rest - expense.quantity;
            saveRest(remaining);
            setCreateExpense(false)
        }
    },[expense, createExpense, expenses, rest])

    return ( 
        <div className="container">
            <header>
                <h1>Weekly expenses</h1>
                <div className="contenido-principal contenido">
                    { showRequest ? (
                    <BudgetRequest
                    saveBudget={saveBudget}
                    saveRest={saveRest}
                    updateRequest={updateRequest}
                    />
                    ) : (
                    <div className="row">
                        <div className="one-half column">
                            <Form
                             saveExpense={saveExpense}
                             setCreateExpense={setCreateExpense}/>
                        </div>
                        <div className="one-half column">
                           <List
                           expenses={expenses}
                           />
                           <BudgetControl 
                            budget={budget}
                            rest={rest}
                           />
                        </div>
                    </div>
                    )
                    }  
                </div>
            </header>
        </div>
    );
}

export default App;