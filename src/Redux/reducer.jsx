import { combineReducers } from "redux";
import wardOccupancyReducer from "./slice/ward/wardSlice";
import bedOccupancyReducer from "./slice/bed/bedSlice";

const bedAndWardReducer = combineReducers({
  allWard: wardOccupancyReducer,
  allBed: bedOccupancyReducer,
});

export default bedAndWardReducer;
