"use client";

import L from "leaflet";
import { MapContainer, Marker, TileLayer } from "react-leaflet";

import "leaflet/dist/leaflet.css";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

// @ts-ignore
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: markerIcon.src,
  iconRetinaUrl: markerIcon2x.src,
  shadowUrl: markerShadow.src,
});

interface MapProps {
  center?: number[];
}

const Map: React.FC<MapProps> = ({ center }) => {
  return (
    <div>
      <p className="bg-red-100 border rounded-md p-3">
        This Map service which is Leaflet map is not portraying the right map of India. I have complained
        to the appropriate person (Volodymyr Agafonkin) and have already put up
        my grievance on the official GitHub repo of Leaflet. If Leaflet fails to
        update the correct map of India within a reasonable period of time, I
        will use some other Map service. For the time being, here is the link to
        the correct map of India.
      </p>
      <span className="block text-center p-2">
        <a
          href="https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/India-map-en.svg/640px-India-map-en.svg.png"
          target="_blank"
          className="bg-green-300 hover:bg-green-400 border rounded-md "
        >
          Map of India
        </a>
      </span>

      <MapContainer
        center={(center as L.LatLngExpression) || [51, -0.09]}
        zoom={center ? 4 : 2}
        scrollWheelZoom={false}
        className="h-[35vh] rounded-lg"
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {center && <Marker position={center as L.LatLngExpression} />}
      </MapContainer>
    </div>
  );
};

export default Map;
