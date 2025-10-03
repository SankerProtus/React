import DoneIcon from "@mui/icons-material/Done";

export default function CreateGrocery({ handleInput, handleSubmit, formData }) {
  return (
    // Input Section
    <section className="input-section">
      <h2>➕ Add Grocery Item</h2>
      <form className="grocery-form" id="grocery-form" onSubmit={handleSubmit}>
        <div className="inputs">
          <div>
            <label htmlFor="item-name">Item Name:</label>
            <input
              type="text"
              name="itemName"
              id="item-name"
              placeholder="🍏 Item Name"
              required
              value={formData.itemName}
              onChange={handleInput}
            />
          </div>

          <div>
            <label htmlFor="expiry-date">Expiry Date:</label>
            <input
              type="date"
              name="expiryDate"
              id="expiry-date"
              placeholder="Expiry Date"
              required
              value={formData.expiryDate}
              onChange={handleInput}
            />
          </div>
        </div>
        <div className="right">
          <div className="datalist">
            <label htmlFor="category">Select Category:</label>
            <input
              type="text"
              name="category"
              list="category"
              value={formData.category}
              onChange={handleInput}
            />
            <datalist className="category" id="category">
              <option name="category" value="🍎 Fruits"></option>
              <option name="category" value="🥦 Vegetables"></option>
              <option name="category" value="🥛 Dairy"></option>
              <option name="category" value="🍗 Meat"></option>
              <option name="category" value="🍞 Bakery"></option>
              <option name="category" value="🥤 Beverages"></option>
              <option name="category" value="🍪 Snacks"></option>
              <option name="category" value="📦 Others"></option>
            </datalist>
          </div>

          <button type="submit">
            <DoneIcon /> Add Item
          </button>
        </div>
      </form>
    </section>
  );
}
