import Header from "./components/Header";
import BudgetForm from "./components/BudgetForm";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import SummarySection from "./components/SummarySection";
import Footer from "./components/Footer";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    description: "",
    amount: "",
    category: "",
  });
  const [expense, setExpense] = useState([]);
  const [budget, setBudget] = useState("");
  const [totalBudget, setTotalBudget] = useState(0);

  function handleBudgetInput(e) {
    const { value } = e.target;

    setBudget(value);
  }

  function submitBudget(e) {
    e.preventDefault();

    setTotalBudget((prev) => prev + parseFloat(budget));

    // Reset
    setBudget("");
  }

  function handleExpenseInput(e) {
    const { name, value } = e.target;

    setFormData((prev) => {
      return { ...prev, [name]: value };
    });
  }

  function submitExpense(e) {
    e.preventDefault();

    if (
      formData.description.trim() === "" ||
      formData.amount.trim() === "" ||
      formData.category.trim() === ""
    ) {
      alert("Please fill out all fields.");
      return;
    }

    const amountValue = parseFloat(formData.amount);
    if (isNaN(amountValue) || amountValue <= 0) {
      alert("Please enter amount value greater than zero.");
      return;
    }

    setExpense((prev) => {
      return [...prev, { id: uuidv4(), ...formData }];
    });

    // Reset
    setFormData({ description: "", amount: "", category: "" });
  }

  function deleteExpense(id) {
    setExpense((prev) => prev.filter((expense) => expense.id !== id));
    alert("Expense deleted successfully!");
  }

  function editExpense(id) {
    // Find the expense to edit
    const expenseToEdit = expense.find((exp) => exp.id === id);

    if (!expenseToEdit) {
      alert("Expense not found!");
      return;
    }

    // Prompt user for new values
    const newDescription = prompt("Enter new description:", expenseToEdit.description);
    const newAmount = prompt("Enter new amount:", expenseToEdit.amount);
    const newCategory = prompt("Enter new category:", expenseToEdit.category);

    // Validate inputs
    if (!newDescription || !newAmount || !newCategory) {
      alert("All fields are required!");
      return;
    }

    const amountValue = parseFloat(newAmount);
    if (isNaN(amountValue) || amountValue <= 0) {
      alert("Please enter a valid amount greater than zero.");
      return;
    }

    // Update the expense
    setExpense((prev) =>
      prev.map((exp) =>
        exp.id === id
          ? {
              ...exp,
              description: newDescription.trim(),
              amount: newAmount.trim(),
              category: newCategory.trim(),
            }
          : exp
      )
    );

    alert("Expense updated successfully!");
  }

  return (
    <>
      <Header />
      <main>
        <BudgetForm
          submitBudget={submitBudget}
          handleBudgetInput={handleBudgetInput}
          budget={budget}
        />
        <ExpenseForm
          submitExpense={submitExpense}
          formData={formData}
          handleExpenseInput={handleExpenseInput}
        />
        <ExpenseList
          expense={expense}
          deleteExpense={deleteExpense}
          editExpense={editExpense}
        />
        <SummarySection expense={expense} totalBudget={totalBudget} />
      </main>
      <Footer />
    </>
  );
}

export default App;
