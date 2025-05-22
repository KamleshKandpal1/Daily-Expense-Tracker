import {configureStore} from '@reduxjs/toolkit';
import transactionReducer from './transactionSlice';
import balanceReducer from './balanceSlice';

export const store = configureStore({
  reducer: {
    balance: balanceReducer,
    transaction: transactionReducer,
  },
});
