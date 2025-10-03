
export default function BudgetForm({ submitBudget, handleBudgetInput, budget }) {


    return (
        <section id="budget-form-section">
            <h2>Set Your Budget</h2>
            <form id="budget-form" onSubmit={submitBudget}>
                <label htmlFor="budget-amount">Budget Amount:</label>
                <input type="number"  name="budget-amount" id="budget-amount" required onChange={handleBudgetInput} value={budget} />
                <button type="submit">Set Budget</button>
            </form>
        </section>
    )
}