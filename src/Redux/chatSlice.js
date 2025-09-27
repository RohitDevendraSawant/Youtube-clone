import { createSlice } from "@reduxjs/toolkit";

const ChatSlice = createSlice(
    {
        name: "chat",
        initialState: {
            messages: [],
        },
        reducers: {
            addMessage: (state, payload) => {
                state.messages.unshift(payload);
            },
        }
    }
);

const { addMessage } = ChatSlice.actions;
export default ChatSlice.reducer;