import { combineReducers } from "redux";
import todosReducer from "./todos/todoSlice";
import filtersReducer from "./filters/filtersSlice";

const rootReducer = combineReducers({
  todos: todosReducer,
  filters: filtersReducer,
});

export default rootReducer;
