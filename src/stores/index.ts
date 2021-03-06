import logger from 'redux-logger';
import { configureStore, ThunkAction, Action, getDefaultMiddleware } from '@reduxjs/toolkit';
import userStore from './user/store';

export const store = configureStore({
  reducer: {
    userStore
  },
  middleware: getDefaultMiddleware().concat(logger),
  devTools: process.env.NODE_ENV !== 'production'
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
