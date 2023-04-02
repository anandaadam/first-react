import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {
  return (
    <>
      {props.items.length === 0 && (
        <h2 className="expenses-list__fallback">No data found!</h2>
      )}
      <ul className="expenses-list">
        {props.items.length > 0 &&
          props.items.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))}
      </ul>
    </>
  );
};

export default ExpensesList;
