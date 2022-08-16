import userReducer from "./reducers";
import {createStore} from 'redux';
const store = createStore(userReducer);
export default store