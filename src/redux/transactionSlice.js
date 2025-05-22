// redux/transactionSlice.js
import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  amount: '',
  category: '',
  paymentType: '',
  icon: '', // ⬅️ new field
  transactions: [],
};

const transactionSlice = createSlice({
  name: 'transaction',
  initialState,
  reducers: {
    setAmount: (state, action) => {
      state.amount = action.payload;
    },
    setCategory: (state, action) => {
      state.category = action.payload.label;
      state.icon = action.payload.icon; // ⬅️ also save icon
    },
    setPaymentType: (state, action) => {
      state.paymentType = action.payload;
    },
    addTransaction: (state, action) => {
      state.transactions.push(action.payload);
    },
    deleteTransaction: (state, action) => {
      state.transactions.pop(action.payload);
    },
    resetTransaction: state => {
      state.amount = '';
      state.category = '';
      state.paymentType = '';
      state.icon = '';
    },
  },
});

export const {
  setAmount,
  setCategory,
  setPaymentType,
  resetTransaction,
  resetPaymentType,
  addTransaction,
  deleteTransaction,
} = transactionSlice.actions;

export default transactionSlice.reducer;
