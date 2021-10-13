import { income, expense, history } from './Actions_Type';

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