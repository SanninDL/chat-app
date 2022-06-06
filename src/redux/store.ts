import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { combineReducers, configureStore } from "@reduxjs/toolkit";

import userReducre from './userSlice';
import appReducer from './appSlice';
import chatReducer from './chatSlice';

const rootReducers = combineReducers({
    user: userReducre,
    app: appReducer,
    chat: chatReducer
});

const store = configureStore({
    reducer: rootReducers
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;



// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;