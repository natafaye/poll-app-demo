import { createSlice } from "@reduxjs/toolkit";
import { TEST_POLLS } from "../TEST_DATA";

let nextPollId = 5;

const pollSlice = createSlice({
    name: "polls",
    initialState: {
        pollList: TEST_POLLS
    },
    reducers: {
        deletePoll: (state, action) => {
            state.pollList = state.pollList.filter(poll => poll.id !== action.payload)
        },
        createPoll: (state, action) => {
            const newPoll = {
                ...action.payload,
                id: nextPollId++
            }
            state.pollList.push(newPoll)
        },
        updatePoll: (state, action) => {
            state.pollList = state.pollList.map(poll =>
                (poll.id === action.payload.id) ?
                    { ...poll, ...action.payload } :
                    poll
            )
        }
    }
})

export const pollReducer = pollSlice.reducer;
export const { deletePoll, createPoll, updatePoll } = pollSlice.actions

export const createPollByStringIdSelector = (stringId) => state => state.polls.pollList.find(poll => poll.id === parseInt(stringId))