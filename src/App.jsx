import React from 'react';
import BudgetRequest from './components/BudgetRequest'

function App() {
    return ( 
        <div className="container">
            <header>
                <h1>Weekly expenses</h1>
                <div className="contenido-principal contenido">
                    <BudgetRequest></BudgetRequest>
                </div>
            </header>
        </div>
    );
}

export default App;