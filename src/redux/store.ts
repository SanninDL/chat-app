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
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
const useAppDispatch = () => useDispatch<AppDispatch>();

const useGetAppState = () => {
    return useAppSelector(state => state.app);
};
const useGetChatState = () => {
    return useAppSelector(state => state.chat);
};
const useGetUserState = () => {
    return useAppSelector(state => state.user);
};

export { useGetAppState, useGetChatState, useGetUserState, useAppDispatch, useAppSelector };
export default store;