import React,{ useState } from 'react';
import './expense.css';
import ExpenseDate from './ExpenseDate';
import Card from '../card';
function Expense(props){
  const[title, setTitle]=useState(props.title);

  const clickHandler=()=>{
    setTitle('Updated!');
  }
  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date}></ExpenseDate>
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
        <button onClick={clickHandler}>Change Title</button>
      </div>
    </Card>
  );
}

export default Expense;