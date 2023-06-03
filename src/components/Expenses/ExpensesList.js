import React from "react";
import Expense from "./Expense";
import './ExpensesList.css';

const ExpenseList = (props) => {

    if (props.items.length === 0) {
        return <h2 className="expenses-list__fallback">Found no expenses.</h2>
    }
    return (
        <ul className="expense-list">
            {props.items.map((expenses) => (
                <Expense
                    key={expenses.id}
                    title={expenses.title}
                    amount={expenses.amount}
                    date={expenses.date}>
                </Expense>))
            }
        </ul>
    );

}
export default ExpenseList;