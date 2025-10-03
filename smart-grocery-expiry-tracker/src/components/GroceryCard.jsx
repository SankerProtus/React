import TableDisplay from "./TableDisplay";
import CardDisplay from "./CardDisplay";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function GroceryCard({ groceryList, removeGrocery, calculateExpiryStatus }) {
  const isMobile = useMediaQuery("(max-width: 768px)");


  return isMobile ? (
    <ul className="grocery-list" id="grocery-list">
      {groceryList.map((grocery) => (
        <CardDisplay
          key={grocery.id}
          id={grocery.id}
          itemName={grocery.itemName}
          category={grocery.category}
          expiryDate={grocery.expiryDate}
          removeGrocery={removeGrocery}
          calculateExpiryStatus={calculateExpiryStatus}
        />
      ))}
    </ul>
  ) : (
    <div className="grocery-table-container">
      <table className="grocery-table">
        <thead>
          <tr>
            <th>Item Name</th>
            <th>Category</th>
            <th>Expiry Date</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody id="grocery-table-body">
          {groceryList.map((grocery) => (
            <TableDisplay
              key={grocery.id}
              id={grocery.id}
              itemName={grocery.itemName}
              category={grocery.category}
              expiryDate={grocery.expiryDate}
              removeGrocery={removeGrocery}
              calculateExpiryStatus={calculateExpiryStatus}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
