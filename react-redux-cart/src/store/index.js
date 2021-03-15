import reducer from './reducer'
import {createStore} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
//combineReducers(reducer,)
let store=createStore(reducer,composeWithDevTools())

export default store;