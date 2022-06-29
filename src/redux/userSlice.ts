import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Socket } from "socket.io-client";
import { authAction } from "../axios/authAction";

interface UserState {
    logged: boolean;
    user: User;
    socket: Socket | null;
}

const initialState: UserState = {
    logged: false,
    user: {
        email: '',
        userName: '',
        avatar: '',
        userId: NaN,

    },
    socket: null
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setSocket: (state, action) => {
            state.socket = action.payload;
        },
        setUser: (state, action: PayloadAction<User>) => {
            state.logged = true;
            state.user = action.payload;
        },
        removeUser: () => {
            return initialState;
        }

    }

});

export const userAction = userSlice.actions;
export default userSlice.reducer;