import { useState } from "react";
import MapView from "./components/MapView";
import Header from "./components/Header";
import DisplayContent from "./components/DisplayContent";
import ErrorBoundary from "./components/ErrorBoundary";
import Footer from "./components/Footer";
import fetchData from "./utils/fetchData";
import "leaflet/dist/leaflet.css";
import "./App.css";

function App() {
  const [searchTerm, setSearchTerm] = useState(null);

  const { geolocation, loading, error } = fetchData(searchTerm);

  const latitude = geolocation?.location?.lat || 40.7128;
  const longitude = geolocation?.location?.lng || -74.0060;
  const city = geolocation?.location?.city || "New York";
  const region = geolocation?.location?.region || "NY";
  const postalCode = geolocation?.location?.postalCode || "";

  const handleChange = (inputValue) => {
    if(!inputValue || inputValue.trim() === "") {
      setSearchTerm(null);
      return;
    }

    const ipAddress = inputValue.trim();
    setSearchTerm(ipAddress);
  };

  return (
    <ErrorBoundary>
      <div className="app">
        <Header handleChange={handleChange} />
        <DisplayContent
          geolocation={geolocation}
          loading={loading}
          error={error}
        />
        <MapView latitude={latitude} longitude={longitude} city={city} region={region} postalCode={postalCode} />
        <Footer />
      </div>
    </ErrorBoundary>
  );
}

export default App;
