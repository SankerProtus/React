import { useState, useEffect, useCallback } from "react";
import { useDebounce } from "use-debounce";

const fetchData = (searchTerm) => {
    const [geolocation, setGeolocation] = useState({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [debounceSearchTerm] = useDebounce(searchTerm, 1000);

  const VITE_API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
  const VITE_IPIFY_API_KEY = import.meta.env.VITE_IPIFY_API_KEY;

  const fetchLocationData = useCallback(async () => {

    try {
      setLoading(true);
      setError(null);

      const endpoint = debounceSearchTerm
        ? `?apiKey=${VITE_IPIFY_API_KEY}&ipAddress=${debounceSearchTerm}`
        : `?apiKey=${VITE_IPIFY_API_KEY}`;

        const url = `${VITE_API_BASE_URL}/api/v2/country,city${endpoint}`; 
        const response = await fetch(url);

      if (!response.ok) {
        setGeolocation([]);
        setError(
          `Network response was not ok.: ${response.status} ${response.statusText}`
        );
        throw new Error(`Respondse not ok: ${response.statusText}`);
      }

      const data = await response.json();
      console.log("Fetched data:", data);

      setGeolocation(data || null);
    } catch (error) {
      console.error(`Error fetching data: ${error}`);
      setError(
        "Failed to locate and identify IP address location. Please try again later."
      );
      setGeolocation(null);
    } finally {
      setLoading(false);
    }
  }, [debounceSearchTerm, VITE_API_BASE_URL, VITE_IPIFY_API_KEY]);

  useEffect(() => {
    fetchLocationData();
  }, [debounceSearchTerm, fetchLocationData]);

  return {
    geolocation,
    loading,
    error,
  };
};

export default fetchData;
