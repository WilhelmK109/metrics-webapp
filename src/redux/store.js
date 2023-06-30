import { configureStore } from '@reduxjs/toolkit';
import cryptoListReducer from './cryptoList/cryptoListSlice';
import cryptoDetailsReducer from './cryptoDetails/cryptoDetailsSlice';

const store = configureStore({
  reducer: {
    cryptoMetrics: cryptoListReducer,
    cryptoDetails: cryptoDetailsReducer,
  },
});

export default store;
