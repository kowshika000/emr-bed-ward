import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import HeaderWithTabs from "./components/Header";
import WardOccupancy from "./BedWardManagement/WardOccupancy/WardOccupancy";
import BedOccupancy from "./BedWardManagement/BedOccupancy/BedOccupancy";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import RoomDetails from "./BedWardManagement/WardOccupancy/RoomDetail";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HeaderWithTabs />}>
          <Route path="ward-occupancy" element={<WardOccupancy />} />
          <Route path="bed-occupancy" element={<BedOccupancy />} />
          <Route index element={<Navigate to="ward-occupancy" />} />
          <Route path="/ward-occupancy/:name" element={<RoomDetails />} />
        </Route>
      </Routes>
    </Router>
  );
};

const root = ReactDOM.createRoot(document.getElementById("bed-ward-app"));
root.render(<App />);

export default App;
