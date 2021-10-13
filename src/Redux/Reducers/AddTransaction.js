import { income, expense } from '../Actions/Actions_Type';

const INITAL_STATE = {
  INCOMES: [],
  EXPENSES: [],
}

const addTransection = (state = INITAL_STATE, action) => {
  switch(action.type){
  case income:
    return{
      ...state,
      INCOMES: [...state.INCOMES, action.payload]
    };
  case expense:
    return{
      ...state,
      EXPENSES: [...state.EXPENSES, action.payload]
    };
  default: return state;
  }
}

export default addTransection;
