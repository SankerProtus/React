export default function SummarySection({ totalBudget, expense }) {
  let expenses = [...expense];

  const expenseAmount = expenses.map((expense) => Number(expense.amount));

  const totalExpenses = Number(expenseAmount
    .reduce((acc, amount) => (acc += amount), 0)
    .toFixed(2));

    const remainingBudget = totalBudget - totalExpenses;

  return (
    <section id="summary-section">
      <h2>Summary</h2>
      <p>
        Total Budget: $
        <span id="total-budget">
          {totalBudget === 0 ? 0 : totalBudget}
        </span>
      </p>
      <p>
        Total Expenses: $<span id="total-expenses">
            {totalExpenses === 0 ? 0 : totalExpenses}
        </span>
      </p>
      <p>
        Remaining Budget: $<span id="remaining-budget">
            {remainingBudget === 0 ? 0 : remainingBudget}
        </span>
      </p>
    </section>
  );
}
