import { createSlice } from '@reduxjs/toolkit';

interface initialState {
    mode: string;
    tabActive: number;
    error: string;
}

const initialState = {
    mode: 'dark',
    tabActive: 0,
    error: ''
};

const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setMode: (state, action) => {
            state.mode = action.payload;
        },
        setTabActive: (state, action) => {
            state.tabActive = action.payload;
        }
    }
});

export const { setMode, setTabActive } = appSlice.actions;
export default appSlice.reducer;