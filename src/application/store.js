import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import usersReducer from "../features/users/redux/usersReducer";
//import productsReducer from "../features/users/redux/usersReducer";
//import ordersReducer from "../features/users/redux/usersReducer";


export const store = createStore(
    combineReducers({
        users: usersReducer
    }),
    applyMiddleware(thunk)

);  