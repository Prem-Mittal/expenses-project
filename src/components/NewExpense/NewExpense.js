import React,{useState}from "react";
import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {

    const[isEditing,setIsEditing]=useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
        setIsEditing(false);
    };
    const starteditinghandler =()=>{
        setIsEditing(true);
    }

    const stopeditinghandler=()=>{
        setIsEditing(false);
    };

    return (
        <div className="new-expense">
            {!isEditing && <button onClick={starteditinghandler} >Add New Expense</button>}
            {isEditing && <ExpenseForm 
            onsaveExpenseData={saveExpenseDataHandler} 
            oncancel={stopeditinghandler} ></ExpenseForm>}
        </div>
    );
}
export default NewExpense;