export default function TableDisplay({
  id,
  itemName,
  category,
  expiryDate,
  removeGrocery,
  calculateExpiryStatus
}) {
  const expiryInfo = calculateExpiryStatus(expiryDate);

  let daysText;
  if (expiryInfo.daysLeft < 0 ) {
    daysText = `Expired ${Math.abs(expiryInfo.daysLeft)} day${Math.abs(expiryInfo.daysLeft) !== 1 ? 's' : ''} ago`;
  } else if (expiryInfo.daysLeft === 0 ) {
    daysText = 'Expires today';
  } else {
    daysText = `${expiryInfo.daysLeft} day${expiryInfo.daysLeft !== 1 ? 's' : ''} left`;
  }
  return (
    <tr className={`${expiryInfo.status}`}>
      <td className="item-name">{itemName}</td>
      <td className="category">{category}</td>
      <td className="expiry-date">{expiryDate}</td>
      <td className="status-cell">{daysText}</td>
      <td className="actions">
        <button className="delete-btn" onClick={() => removeGrocery(id)}>
          Delete
        </button>
      </td>
    </tr>
  );
}
