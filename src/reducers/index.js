import { combineReducers } from "redux";
import loginReducer from "./login.reducer";
import companyReducer from "./company.reducer";
import warehouseReducer from "./warehouse.reducer";
import deptandcostReducer from "./deptandcost.reducer";

export default combineReducers({
  loginReducer,
  companyReducer,
  warehouseReducer,
  deptandcostReducer,
});
