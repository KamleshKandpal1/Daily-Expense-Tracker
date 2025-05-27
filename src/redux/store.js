import {configureStore, combineReducers} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistReducer, persistStore} from 'redux-persist';

import transactionReducer from './transactionSlice';
import balanceReducer from './balanceSlice';

// Config for Redux Persist
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['transaction', 'balance'], // ✅ persist these slices
};

// Combine your reducers
const rootReducer = combineReducers({
  transaction: transactionReducer,
  balance: balanceReducer,
});

// Create a persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Export your configured store and persistor
export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
