import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";

let DefaultIcon = L.icon({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
  iconRetinaUrl: markerIcon2x,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

L.Marker.prototype.options.icon = DefaultIcon;

export default function MapView({ latitude, longitude, city, region, postalCode }) {
  
  const lat = parseFloat(latitude);
  const lng = parseFloat(longitude);
  
  // Fallback coordinates (New York City)
  const validLat = !isNaN(lat) ? lat : 40.7128;
  const validLng = !isNaN(lng) ? lng : -74.0060;
  
  return (
    <div className="map-container">
      <MapContainer 
        center={[validLat, validLng]} 
        zoom={13}
        style={{ height: "100%", width: "100%" }}
        zoomControl={true}
        key={`${validLat}-${validLng}`}
      >
        <TileLayer 
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={[validLat, validLng]}>
          <Popup>
            {`${city || 'Unknown'}, ${region || 'Unknown'} ${postalCode || ''}`}
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
