import { createAsyncThunk } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { chatAction } from '../axios/chatAction';

interface ChatState {
    rooms: Room[],
    messages: Message[];
    loading: boolean;
    currentRoomId: number;
}

const initialState: ChatState = {
    rooms: [],
    currentRoomId: 0,
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
        builder
            .addCase(fetchRooms.fulfilled, (state, action) => {
                state.rooms = action.payload;
                state.loading = false;

            })
            .addCase(fetchRooms.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(fetchMessages.fulfilled, (state, action) => {
                state.messages = action.payload;
            });
    }
});
export const fetchRooms = createAsyncThunk('chat/fetchRoom', async (userId: number) => {
    const { data } = await chatAction.getRooms(userId);
    return data.data.rooms;
});
export const fetchMessages = createAsyncThunk('chat/fetchMessages', async (roomId: number) => {
    const { data } = await chatAction.getMessages(roomId);

    return data.data.messages;

});

export const { selectRoom } = chatSlice.actions;
export default chatSlice.reducer; 