import { configureStore } from '@reduxjs/toolkit';
import Reducer from './reducer'; 

const store = configureStore({
  reducer: {
    slice: Reducer, 
  },
});

export default store;