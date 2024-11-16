import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from "react-redux"
import { configureStore, Action } from "@reduxjs/toolkit";
import photosSliceReducer from "./PhotoSlice";
import { ThunkAction } from "redux-thunk"
import { PhotoState } from "./PhotoSlice";

// The AppThunk type will help us in writing type definitions for thunk actions
export type AppThunk = ThunkAction<void, PhotoState, unknown, Action<string>>;

const store = configureStore({
  reducer: {
    photosStore: photosSliceReducer,
  },
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
     <Provider store={store}>
      <App />
    </Provider>
);

reportWebVitals();
