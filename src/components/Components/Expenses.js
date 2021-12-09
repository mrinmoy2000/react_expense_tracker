import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpenseFilter from "../ExpenseFilter/ExpensesFilter";

function Expenses(props) {
  const [enteredFilter, setEnteredFilter] = useState("2020");
  const filterChangeHandler = (selectedFilter) => {
    setEnteredFilter(selectedFilter);
  };

  const filteredExpenses = props.expenses.filter(expense => {
    return expense.date.getFullYear().toString() === enteredFilter
  })

  let expensesContent  = <p>No expenses found.</p>;
  if(filteredExpenses.length > 0){
    expensesContent = filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }

  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={enteredFilter}
        onChangeFilter={filterChangeHandler}
      />
      {expensesContent}
    </Card>
  );
}

export default Expenses;
