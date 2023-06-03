import React,{useState} from 'react';
import ExpensesM from './components/Expenses/ExpensesM.js'
import NewExpense from './components/NewExpense/NewExpense.js';
const Dummy_Expense = [
  { id: 'e1', 
    title: 'Toilet Paper', 
    amount: 94.12, 
    date: new Date(2021, 7, 14), },
    { id: 'e2', 
    title: 'Stationary', 
    amount: 94.12, 
    date: new Date(2020, 8, 28), },
    { id: 'e3', 
    title: 'Paper', 
    amount: 94.12, 
    date: new Date(2020, 9, 15), },
    { id: 'e4', 
    title: 'Mouse', 
    amount: 94.12, 
    date: new Date(2020, 2, 3), },
];
function App() {
  const[expenses,setExpenses]=useState(Dummy_Expense);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses)=>{
      return [expense, ...prevExpenses];
    });
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <ExpensesM items={expenses}></ExpensesM>
    </div>
  );
}

export default App;
