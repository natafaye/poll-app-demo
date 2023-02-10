import { createSlice } from "@reduxjs/toolkit";
import { TEST_RESPONSES } from "../TEST_DATA";

let nextResponseId = 20;

const responseSlice = createSlice({
    name: "responses",
    initialState: {
        responseList: TEST_RESPONSES
    },
    reducers: {
        createResponse: (state, action) => {
            const newResponse = {
                ...action.payload,
                id: nextResponseId++
            }
            state.responseList.push(newResponse)
        }
    }
})

export const responseReducer = responseSlice.reducer;
export const { createResponse } = responseSlice.actions