import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux'
import mapReducer  from './slices/mapSlice'

export const store = configureStore({
  reducer: {
    data: mapReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>() // Export a hook that can be reused to resolve types
