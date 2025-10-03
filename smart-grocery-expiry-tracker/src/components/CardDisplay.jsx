export default function CardDisplay({
  id,
  itemName,
  category,
  expiryDate,
  removeGrocery,
  calculateExpiryStatus
}) {

  // Calculate expiry status
    const expiryInfo = calculateExpiryStatus(expiryDate);

    // Determine days display text
    let daysText;
    if (expiryInfo.daysLeft < 0) {
        daysText = `Expired ${Math.abs(expiryInfo.daysLeft)} day${Math.abs(expiryInfo.daysLeft) !== 1 ? 's' : ''} ago`;
    } else if (expiryInfo.daysLeft === 0) {
        daysText = 'Expires today';
    } else {
        daysText = `${expiryInfo.daysLeft} day${expiryInfo.daysLeft !== 1 ? 's' : ''} left`;
    }

  return (
    <li className={`grocery-card ${expiryInfo.status}`}>
      <div className="item">
        <div className="item-info">
          <h3 className="item-name">{itemName}</h3>
          <p className="category-label">{category}</p>
          <p className="expiry-label">Expiry Date</p>
          <p className="date">{expiryDate}</p>
        </div>

        <div className="item-actions">
          <p className="status-text">{daysText}</p>
          <button className="delete-btn" onClick={() => removeGrocery(id)}>
            Delete
          </button>
        </div>
      </div>
    </li>
  );
}
