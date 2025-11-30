import Spinner from "./Spinner";

const DisplayContent = ({ geolocation, loading, error }) => {
  return (
    loading ? (
      <div className="info-card"><Spinner /></div>
    ) : error ? (
      <div className="info-card" style={{ color: "#dc3545"}}>Error: {error}</div>
    ) : (
      <div className="info-card">
        <div className="info-item">
          <div className="info-label">IP Address</div>
          <div className="info-value">
            {geolocation?.ip || "192.212.174.101"}
          </div>
        </div>
        <div className="info-item">
          <div className="info-label">Location</div>
          <div className="info-value">
            {geolocation?.location?.city || "Brooklyn"}, 
            {geolocation?.location?.region || "NY"}
            {geolocation?.location?.postalCode || ""}
          </div>
        </div>
        <div className="info-item">
          <div className="info-label">Timezone</div>
          <div className="info-value">
            UTC{geolocation?.location?.timezone || "-05:00"}
          </div>
        </div>
        <div className="info-item">
          <div className="info-label">ISP</div>
          <div className="info-value">
            {geolocation?.isp || "SpaceX Starlink"}
          </div>
        </div>
      </div>
    )
  );
};

export default DisplayContent;
