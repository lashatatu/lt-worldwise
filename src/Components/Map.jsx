import style from "./Map.module.css";
import { useNavigate, useSearchParams } from "react-router-dom";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { useState } from "react";
import { useCities } from "../contexts/CitiesContext.jsx";

export default function Map() {
  const navigate = useNavigate();
  const { cities } = useCities();
  const [mapPosition, setMapPosition] = useState([40, 0]);
  const [searchParams, setSearchParams] = useSearchParams();
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");
  return (
    <div className={style.mapContainer}>
      <MapContainer
        center={mapPosition}
        zoom={13}
        scrollWheelZoom={true}
        className={style.map}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        />
        {cities.map((city) => (
          <Marker position={[city.position.lat,city.position.lng]} key={city.id}>
            <Popup>
              <span>{city.emoji}</span><span>{city.cityName}</span>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
