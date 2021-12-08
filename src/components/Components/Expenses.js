import React, {useState} from 'react';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';
import ExpenseFilter from '../ExpenseFilter/ExpensesFilter'



function Expenses(props) {

  const [enteredFilter, setEnteredFilter] = useState('2020')
  const filterChangeHandler = (selectedFilter) => {
    setEnteredFilter(selectedFilter);
  }

  return (
    <Card className="expenses">
      <ExpenseFilter selected ={enteredFilter} onChangeFilter={filterChangeHandler} />
      <ExpenseItem
        title={props.expenses[0].title}
        amount={props.expenses[0].amount}
        date={props.expenses[0].date}
      />
      <ExpenseItem
        title={props.expenses[1].title}
        amount={props.expenses[1].amount}
        date={props.expenses[1].date}
      />
      <ExpenseItem
        title={props.expenses[2].title}
        amount={props.expenses[2].amount}
        date={props.expenses[2].date}
      />
    </Card>
  );
}

export default Expenses;