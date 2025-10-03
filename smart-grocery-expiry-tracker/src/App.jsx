import Header from "./components/Header";
import CreateGrocery from "./components/CreateGrocery";
import Notification from "./components/Notification";
import GroceryCard from "./components/GroceryCard";
import EmptyState from "./components/EmptyState";
import FilterSort from "./components/FilterSort";
import { v4 as uuidv4 } from "uuid";
import { useState, useCallback } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    itemName: "",
    expiryDate: "",
    category: "",
  });

  const [groceryList, setGroceryList] = useState([]);
  const [filteredGroceryList, setFilteredGroceryList] = useState([]);

  function handleInput(e) {
    const { name, value } = e.target;
    setFormData((prev) => {
      return { ...prev, [name]: value };
    });
  }

  // Create grocery
  function handleSubmit(e) {
    e.preventDefault();
    // Validate input
    if (
      formData.itemName === "" ||
      formData.expiryDate === "" ||
      formData.category === ""
    ) {
      alert("Please fill out all fields.");
      return;
    }

    if (formData.itemName.length < 3) {
      alert("Grocery name should be 3 characters or more.");
      return;
    }

    setGroceryList((prev) => {
      return [...prev, { id: uuidv4(), ...formData }];
    });

    // Reset Form
    setFormData({
      itemName: "",
      expiryDate: "",
      category: "",
    });
  }

  // Remove groceries
  function removeGrocery(id) {
    if (
      confirm(
        "Are you sure you want to delete grocery? This action cannot be undone."
      )
    ) {
      setGroceryList((prev) => prev.filter((grocery) => grocery.id !== id));
    }
  }

  // Handle filtered data from FilterSort component
  const handleFilteredDataChange = useCallback((filteredData) => {
    setFilteredGroceryList(filteredData);
  }, []);

  function calculateExpiryStatus(expiryDateString) {
    const expiryDate = new Date(expiryDateString);
    const today = new Date();

    // Set both date to midnight
    expiryDate.setHours(0, 0, 0, 0);
    today.setHours(0, 0, 0, 0);

    // Calculate difference in days
    const timeDifference = expiryDate.getTime() - today.getTime();
    const daysLeft = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

    // Determine status based on days left
    let status;
    if (daysLeft < 0) {
      status = "expired";
    } else if (daysLeft <= 7) {
      status = "warning";
    } else {
      status = "safe";
    }

    return {
      daysLeft: daysLeft,
      status: status,
    };
  }

  return (
    <div className="container">
      <Header />
      <main>
        <CreateGrocery
          handleInput={handleInput}
          handleSubmit={handleSubmit}
          formData={formData}
        />

        <FilterSort
          groceryList={groceryList}
          onFilteredDataChange={handleFilteredDataChange}
        />

        {groceryList.length === 0 ? (
          <EmptyState />
        ) : filteredGroceryList.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '2rem', color: '#666' }}>
            <p>No items match the current filter criteria.</p>
          </div>
        ) : (
          <GroceryCard
            groceryList={filteredGroceryList}
            removeGrocery={removeGrocery}
            calculateExpiryStatus={calculateExpiryStatus}
          />
        )}

        <Notification
          groceryList={groceryList}
          calculateExpiryStatus={calculateExpiryStatus}
        />
      </main>
    </div>
  );
}

export default App;
