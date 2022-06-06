import { createAsyncThunk } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { chatAction } from '../axios/chatAction';

interface ChatState {
    rooms: Room[],
    messages: Message[];
    loading: boolean;
    currentRoomId: string;
}

const initialState: ChatState = {
    rooms: [],
    currentRoomId: '',
    messages: [],
    loading: false
};

const chatSlice = createSlice({
    name: 'chat',
    initialState,
    reducers: {
        selectRoom: (state, action) => {
            state.currentRoomId = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchRooms.fulfilled, (state, action) => {
            console.log('payload ', action.payload);
            state.rooms = action.payload;
            state.loading = false;

        })
            .addCase(fetchRooms.pending, (state, action) => {
                state.loading = true;
            });
    }
});
export const fetchRooms = createAsyncThunk('chat/fetchRoom', async (userId: string) => {
    const { data } = await chatAction.getRooms(userId);
    console.log('res rooms ', data.data.rooms);
    return data.data.rooms;
});

export const { selectRoom } = chatSlice.actions;
export default chatSlice.reducer; 