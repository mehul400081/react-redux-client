
import { combineReducers } from 'redux';
import PersonReducer from './person-reducer';

const reducers = {
  personStore: PersonReducer
}

const rootReducer = combineReducers(reducers);

export default rootReducer;