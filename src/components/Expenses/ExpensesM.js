import React, { useState } from 'react';
import ExpenseList from './ExpensesList';
import './ExpenseM.css';
import Card from '../card';
import ExpenseFilter from './ExpenseFilter';
import ExpenseChart from './ExpenseChart';

function ExpensesM(props) {

  const [filteredYear, setfilteredyear] = useState('2020');

  const filterChangehandler = selectedYear => {
    setfilteredyear(selectedYear);
  }

  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <li>
      <Card className='expenses'>
        <ExpenseFilter
          selected={filteredYear}
          onChangeFilter={filterChangehandler}></ExpenseFilter>
        <ExpenseChart expenses={filteredExpenses}></ExpenseChart>
        <ExpenseList items={filteredExpenses}></ExpenseList>
      </Card>
    </li>
  );
}
export default ExpensesM;