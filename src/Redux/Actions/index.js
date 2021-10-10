import income from './Actions_Type';
import expense from './Actions_Type';
import history from './Actions_Type';

export const addIncome = (payload) => ({
  type: income,
  payload,
});

export const addExpense = (payload) => ({
    type: expense,
    payload,
});

export const addHistory = (payload) => ({
    type: history,
    payload,
});