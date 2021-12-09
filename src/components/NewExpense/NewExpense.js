import React, { useState } from 'react'
import './NewExpense.css'
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }

        props.onAddExpense(expenseData);
    }

    const [expenseFormViewer, setExpenseFormViewer] = useState(false)

    const expenseFormViewHandler = () => {
        setExpenseFormViewer(!expenseFormViewer)
    }

    return(
        <div className="new-expense">
            {!expenseFormViewer && <button onClick={expenseFormViewHandler}>Add New Expense</button>}
            {expenseFormViewer && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancelForm={expenseFormViewHandler} />}
        </div>
    );   
}

export default NewExpense;