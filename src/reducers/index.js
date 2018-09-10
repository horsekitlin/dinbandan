import {combineReducers} from "redux";
import auth from './authReducer';
import routes from './routesReducer';

const appReducer = combineReducers({
  auth,
  routes
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
