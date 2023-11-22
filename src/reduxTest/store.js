import { configureStore } from '@reduxjs/toolkit';
import dataReducer from 'reduxTest/dataSlice.js';

const store = configureStore({
  reducer: {
    data: dataReducer,
  },
});

export default store;