export default function ExpenseForm({submitExpense, formData, handleExpenseInput }) {

  return (
    <section id="expense-form-section">
      <h2>Add Expense</h2>
      <form id="expense-form" onSubmit={submitExpense}>
        <label htmlFor="expense-description">Description:</label>
        <input
          type="text"
          id="expense-description"
          name="description"
          required
          value={formData.description}
          onChange={handleExpenseInput}
        />

        <label htmlFor="expense-amount">Amount:</label>
        <input
          type="number"
          id="expense-amount"
          name="amount"
          required
          value={formData.amount}
          onChange={handleExpenseInput}
        />

        <label htmlFor="expense-category">Category:</label>
        <select
          id="expense-category"
          name="category"
          required
          value={formData.category}
          onChange={handleExpenseInput}
        >
          <option value="">
            Select Category
          </option>
          <option value="Food">Food</option>
          <option value="Transport">Transport</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Utilities">Utilities</option>
          <option value="Other">Other</option>
        </select>

        <button type="submit">Add Expense</button>
      </form>
    </section>
  );
}
