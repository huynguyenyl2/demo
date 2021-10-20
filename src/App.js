import { React, useState } from "react";
import "./App.css";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";

function App() {
  // const [location, setLocation] = useState([51.505, -0.09]);
  // const center = [51.505, -0.09];
  // const fillBlueOptions = { fillColor: "blue" };
  // const redOptions = { color: "red" };
  // const myRef = useRef(null);
  // function handleClick() {
  //   setLocation([21.180292, 105.54718]);
  //   // myRef.current.notice();
  //   // const map = useMap();
  //   // map.flyTo(location, 100);
  // }

  function LocationMarker() {
    const [position, setPosition] = useState(null);
    const map = useMapEvents({
      click() {
        map.locate();
      },
      locationfound(e) {
        setPosition(e.latlng);
        map.flyTo(e.latlng, map.getZoom());
      },
    });

    return position === null ? null : (
      <Marker position={position}>
        <Popup>You are here</Popup>
      </Marker>
    );
  }
  return (
    <div className="App">
      {/* <button onClick={handleClick}>Huy</button> */}
      <MapContainer
        center={{ lat: 51.505, lng: -0.09 }}
        zoom={13}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <LocationMarker />
      </MapContainer>
    </div>
  );
}

export default App;
