import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import counterReducer from '../redux/slices';        /* why counterReducer*/ 
import { createWrapper } from 'next-redux-wrapper';

export const makeStore = () => {
  return configureStore({
    reducer: {
      counter: counterReducer, 
    },
  });
}


export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const wrapper = createWrapper<AppStore>(makeStore);

export default makeStore;
