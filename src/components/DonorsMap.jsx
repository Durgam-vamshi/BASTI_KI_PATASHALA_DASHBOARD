/* eslint-disable no-unused-vars */
import React from "react";
import { useTheme } from "@/context/ThemeContext"; // Import the theme context
import { MapContainer, TileLayer, Marker, Popup, LayersControl } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { FaGlobe, FaSatelliteDish } from "react-icons/fa";

const donors = [
  { id: 1, name: "John Doe", country: "USA", coords: [37.7749, -122.4194] },
  { id: 2, name: "Priya Sharma", country: "India", coords: [28.6139, 77.209] },
  { id: 3, name: "Carlos Ruiz", country: "Spain", coords: [40.4168, -3.7038] },
  { id: 4, name: "Aisha Omar", country: "UAE", coords: [25.276987, 55.296249] },
];

const donorIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
  iconSize: [30, 30],
});

const DonorsMap = () => {
  const { theme } = useTheme(); // Use theme from context

  return (
    <div className={`p-6 shadow-lg border transition-all duration-300
        ${theme === "dark" ? "bg-gray-900 border-gray-700 text-white" : "bg-white border-gray-300 text-black"}
      `}
    >
      <h3 className="text-xl font-bold text-blue-400 mb-4 flex items-center gap-2">
        <FaGlobe /> Donors Around the World
      </h3>
      <MapContainer center={[20, 0]} zoom={2} style={{ height: "400px", width: "100%" }}>
        <LayersControl position="topright">
          {/* Natural View */}
          <LayersControl.BaseLayer checked name="Natural View">
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution="&copy; OpenStreetMap contributors"
            />
          </LayersControl.BaseLayer>

          {/* Satellite View */}
          <LayersControl.BaseLayer name="Satellite View">
            <TileLayer
              url="https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png"
              attribution="&copy; OpenTopoMap contributors"
            />
          </LayersControl.BaseLayer>
        </LayersControl>

        {/* Donor Markers */}
        {donors.map((donor) => (
          <Marker key={donor.id} position={donor.coords} icon={donorIcon}>
            <Popup>
              <strong>{donor.name}</strong>
              <br />
              {donor.country}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default DonorsMap;















