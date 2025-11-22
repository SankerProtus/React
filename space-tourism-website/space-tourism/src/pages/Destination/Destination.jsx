import { useState } from "react";
import NavigationLinks from "../../utils/NavigationLinks";
import "../../App.css";
import { useDestination } from '../../hooks/useData';

const Destination = () => { 
  const [selectedDestination, setSelectedDestination] = useState('moon');
  const { destination, loading, error } = useDestination(selectedDestination);
  
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  return (
    <div className="destination-content">
      <div className="content-info">
        <img className="content-img" src={destination.images.png} alt={destination.name} />
        <div className="space-info">
          <NavigationLinks 
            selectedDestination={selectedDestination}
            onDestinationChange={setSelectedDestination}
          />
          <div>
            <h1 className="text-lg">{destination.name}</h1>
            <p className="description">{destination.description}</p>
            <div className="space-travel-info">
              <div className="distace-info">
                <span className="avg-distance">Avg. distance</span>
                <span className="distance-in-km">{destination.distance}</span>
              </div>
              <div className="time-info">
                <span className="travel-time"> Est. travel time</span>
                <span className="time">{destination.travel}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;



