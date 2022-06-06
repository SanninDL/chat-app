import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { authAction } from "../axios/authAction";



const initialState = {
    logged: false,
    user: {
        email: '',
        userName: '',
        avatar: '',
        userId: '',

    }
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
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