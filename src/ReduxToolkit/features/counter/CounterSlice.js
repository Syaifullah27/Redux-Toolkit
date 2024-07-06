import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    value: 0
}

const counterSlice = createSlice({
    name: 'counter', // cuma sebatas penamaan tidak memiliki fungsi khusus
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
    }
})

export const { increment, decrement } = counterSlice.actions
export default counterSlice.reducer

// sederhana pake createSlice