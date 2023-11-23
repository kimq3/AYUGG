import { configureStore } from '@reduxjs/toolkit';
import dataReducer from 'reduxTest/dataSlice';

export const store = configureStore({
  reducer: {
    data: dataReducer,
  },
});