import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counterSlice';
import employeeReducer from './employeeSlice';

export const store = configureStore({
  reducer: {
    counter:counterReducer,
    employee:employeeReducer
  },
})