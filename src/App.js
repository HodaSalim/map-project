import { Map } from "./components/Map";

const location = {
  address: "1600 Amphitheatre Parkway, Mountain View, california.",
  lat: 37.42216,
  lng: -122.08427,
};

function App() {
  return (
    <div className="App">
      <Map location={location} zoomLevel={17} /> {/* include it here */}
    </div>
  );
}

export default App;
