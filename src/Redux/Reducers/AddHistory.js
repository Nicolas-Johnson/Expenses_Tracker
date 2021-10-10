export const history = 'History';

const INITAL_STATE = {
    HISTORY: [],
}

const addHistory = (state = INITAL_STATE, action) => {
  switch(action.type) {
  case history:
    return {
      ...state,
      HISTORY: [...state.HISTORY, action.payload]
    };
  default: return state;
  }
}

export default addHistory;
