import React, { useState } from "react";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesList from "./ExpensesList";
import ExpenseFilter from "../ExpenseFilter/ExpensesFilter";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const [enteredFilter, setEnteredFilter] = useState("2021");
  const filterChangeHandler = (selectedFilter) => {
    setEnteredFilter(selectedFilter);
  };

  const filteredExpenses = props.expenses.filter(expense => {
    return expense.date.getFullYear().toString() === enteredFilter
  })

  

  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={enteredFilter}
        onChangeFilter={filterChangeHandler}
      />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
}

export default Expenses;
