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

  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={enteredFilter}
        onChangeFilter={filterChangeHandler}
      />
      {props.expenses.map((expense) => (
        <ExpenseItem
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </Card>
  );
}

export default Expenses;
