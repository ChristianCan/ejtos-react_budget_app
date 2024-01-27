import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

const Budget = () => {
  const { budget, dispatch, expenses, currency } = useContext(AppContext);

  const totalExpenses = expenses.reduce((total, item) => {
    return (total += item.cost);
  }, 0);

  const [newBudget, setNewBudget] = useState(budget);
  const handleBudgetChange = (event) => {
    if (event.target.value < totalExpenses) {
      alert("You can't reduce the budget value lower than the spending value");
    } else if (event.target.value > 20000) {
      alert(`Max budget allowed is ${currency}20000`);
    } else {
      setNewBudget(event.target.value);
      dispatch({
        type: "SET_BUDGET",
        payload: event.target.value,
      });
    }
  };

  return (
    <div className="alert alert-secondary">
      <span>Budget: {currency}</span>
      <input
        type="number"
        step="10"
        value={newBudget}
        onChange={handleBudgetChange}
      ></input>
    </div>
  );
};

export default Budget;
