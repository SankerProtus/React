export default function Notification({ groceryList, calculateExpiryStatus }) {

  // Find items expiring within 5 days or already expired
  const urgentGroceries = groceryList.filter((grocery) => {
    const expiryInfo = calculateExpiryStatus(grocery.expiryDate);
    return expiryInfo.daysLeft <= 5;
  });

  return (
    // Notifications Section
    <section className="notifications-section">
      <h2>🔔 Notifications</h2>
        <div id="notifications">
            {urgentGroceries.length > 0 ? (
            urgentGroceries.map((element) => {
                const expiryInfo = calculateExpiryStatus(element.expiryDate);

                if (expiryInfo.daysLeft < 0) {
                    return (
                        <div key={element.id} className="notification danger">
                            {`${element.itemName} expired ${Math.abs(
                                expiryInfo.daysLeft
                            )} day${Math.abs(expiryInfo.daysLeft) !== 1 ? "s" : ""} ago`}
                        </div>
                    );
                } else if (expiryInfo.daysLeft === 0) {
                    return (
                        <div key={element.id} className="notification warning">
                            {`${element.itemName} expires today!`}
                        </div>
                    );
                } else {
                    return (
                        <div key={element.id} className="notification">
                            {`${element.itemName} expires in ${
                                expiryInfo.daysLeft
                            } day${expiryInfo.daysLeft !== 1 ? "s" : ""}`}
                        </div>
                    );
                }
            })
            ) : (
            <div className="notification">
                <p style={{ color: "#999" }}>No urgent notifications</p>
            </div>
            )}
        </div>
    </section>
  );
}
