// redux/balanceSlice.js
import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  income: 34246.89,
  spent: 0,
};

const balanceSlice = createSlice({
  name: 'balance',
  initialState,
  reducers: {
    addIncome: (state, action) => {
      state.income += action.payload;
    },
    addSpent: (state, action) => {
      state.spent += action.payload;
    },
    resetBalance: () => initialState,
  },
});

export const {addIncome, addSpent, resetBalance} = balanceSlice.actions;
export default balanceSlice.reducer;
