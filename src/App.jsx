import React from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Provider } from "react-redux";
import HeaderWithTabs from "./components/Header";
import WardOccupancy from "./BedWardManagement/WardOccupancy/WardOccupancy";
import BedOccupancy from "./BedWardManagement/BedOccupancy/BedOccupancy";
import RoomDetails from "./BedWardManagement/WardOccupancy/RoomDetail";
import store from "emr_ui/Store";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

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
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

export default App;
