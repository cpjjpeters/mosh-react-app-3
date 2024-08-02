import { useState } from "react";

// import "./App.css";
import ExpenseList from "./expense-tracker/components/ExpenseList";

function App() {
  const [expenses, setExpenses] = useState([
    { id: 1, description: "Car Insurance", amount: 294.67, category: "Auto" },
    { id: 2, description: "Mortgage", amount: 1000, category: "Home" },
    { id: 3, description: "Electricity", amount: 100, category: "Utilities" },
    { id: 4, description: "Water", amount: 50, category: "Utilities" },
  ]);

  return (
    <>
      <div>
        <ExpenseList
          expenses={expenses}
          onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
        />
      </div>
    </>
  );
}

export default App;
