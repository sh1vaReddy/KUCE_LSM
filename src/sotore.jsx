import { configureStore } from '@reduxjs/toolkit';

import authReducer from './components/Redux/auth';
import { apiSlice } from './components/Redux/apislice';


const store = configureStore({
    reducer: {
    
      auth: authReducer,
      [apiSlice.reducerPath]: apiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: true
  });
  
  export default store;