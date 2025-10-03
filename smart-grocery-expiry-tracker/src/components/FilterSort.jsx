import { useState, useEffect, useCallback } from "react";

export default function FilterSort({ groceryList, onFilteredDataChange }) {
  const [filterCategory, setFilterCategory] = useState({
    category: "all",
    sortBy: "",
  });

  function handleInput(e) {
    const { name, value } = e.target;
    setFilterCategory((prev) => ({ ...prev, [name]: value }));
  }

  const getFilteredGroceries = useCallback(() => {
    // Create a copy of the original array
    let filtered = [...groceryList];

    // Filter
    if (filterCategory.category !== "all") {
      filtered = filtered.filter(
        (grocery) => grocery.category === filterCategory.category
      );
    }

    // Sort
    switch (filterCategory.sortBy) {
      case "name":
        filtered.sort((a, b) => a.itemName.localeCompare(b.itemName));
        break;
      case "expiry":
        filtered.sort((a, b) => {
          const dateA = new Date(a.expiryDate);
          const dateB = new Date(b.expiryDate);

          // Handle invalid dates
          if (isNaN(dateA.getTime()) || isNaN(dateB.getTime())) {
            return 0;
          }

          return dateA - dateB;
        });
        break;
      case "category":
        filtered.sort((a, b) => a.category.localeCompare(b.category));
        break;
      default:
        // No sorting applied
        break;
    }

    return filtered;
  }, [groceryList, filterCategory]);

  // Update parent component whenever filter/sort changes
  useEffect(() => {
    const filteredData = getFilteredGroceries();
    onFilteredDataChange(filteredData);
  }, [getFilteredGroceries, onFilteredDataChange]);

  return (
    <section className="grocery-list-section">
      <h2>🛒 Grocery List</h2>
      <div className="filter-sort">
        <select
          name="filterCategory"
          value={filterCategory.filterCategory}
          onChange={handleInput}
        >
          <option value="all">🛍️ All Groceries</option>
          <option value="🍎 Fruits">🍎 Fruits</option>
          <option value="🥦 Vegetables">🥦 Vegetables</option>
          <option value="🥛 Dairy">🥛 Dairy</option>
          <option value="🍗 Meat">🍗 Meat</option>
          <option value="🍞 Bakery">🍞 Bakery</option>
          <option value="🥤 Beverages">🥤 Beverages</option>
          <option value="🍪 Snacks">🍪 Snacks</option>
          <option value="📦 Others">📦 Others</option>
        </select>

        <select
          name="sortBy"
          value={filterCategory.sortBy}
          onChange={handleInput}
        >
          <option value="">↕️ Sort By</option>
          <option value="name">🔤 Name</option>
          <option value="expiry">⏰ Expiry Date</option>
          <option value="category">📂 Category</option>
        </select>
      </div>
    </section>
  );
}
