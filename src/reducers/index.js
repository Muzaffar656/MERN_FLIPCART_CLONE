import { combineReducers } from "redux";
import  {userReducers} from './userReducers'
export const reducers = combineReducers({
user : userReducers
}) 