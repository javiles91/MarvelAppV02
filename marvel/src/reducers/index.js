import { combineReducers } from "redux";

//dummy reducer to be deleted
const blankReducer = () => {
  return "jose";
};

export default combineReducers({
  blank: blankReducer, //dummy property to be deleted;
});
