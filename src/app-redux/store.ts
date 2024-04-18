import { configureStore } from '@reduxjs/toolkit';
import salesSlice from './salesSlice';

export const store = configureStore({
  reducer: {
    sales: salesSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
