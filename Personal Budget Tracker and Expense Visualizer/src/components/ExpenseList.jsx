export default function ExpenseList({ expense, deleteExpense, editExpense }) {
  const today = new Date();
  const formattedDate = today.toISOString().split("T")[0];
  return (
    <section id="expenses-section">
      <h2>Expenses</h2>
      <ul id="expenses-list">
        {expense.length > 0
          ? expense.map((item) => (
              <li key={item.id} className="expense-item">
                <div className="expense-header">
                  <span className="expense-description">
                    {item.description}
                  </span>
                  <span className="expense-amount">
                    ${parseFloat(item.amount).toFixed(2)}
                  </span>
                </div>
                <div className="expense-details">
                  <span className="expense-category">{item.category}</span>
                  <span className="expense-date">{formattedDate}</span>
                  <div className="expense-actions">
                    <button
                      className="edit-btn"
                      data-id={item.id}
                      onClick={() => editExpense(item.id)}
                    >
                      Edit
                    </button>
                    <button
                      className="delete-btn"
                      data-id={item.id}
                      onClick={() => deleteExpense(item.id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </li>
            ))
          : null}
      </ul>
    </section>
  );
}
