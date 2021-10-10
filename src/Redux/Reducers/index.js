import { combineReducers } from 'redux';
import addTransection from './AddTransaction';
import addHistory from './AddHistory';

const rootReducer = combineReducers({
  ADD_TRANSACTION: addTransection,
  ADD_HISTORY: addHistory,
});

export default rootReducer;
