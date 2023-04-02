import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [form, setForm] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    props.onAddExpense(expenseData);
    isShowForm();
  };

  const isShowForm = () => {
    setForm((prevState) => (prevState ? false : true));
  };

  return (
    <div className="new-expense">
      {!form && <button onClick={isShowForm}>Add New Expense</button>}
      {form && (
        <ExpenseForm
          onCancel={isShowForm}
          onSaveExpenseData={saveExpenseDataHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
