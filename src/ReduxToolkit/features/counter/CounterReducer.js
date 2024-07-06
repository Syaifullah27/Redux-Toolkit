import { createReducer } from "@reduxjs/toolkit"
import { decrement, increment } from "./CounterAction"

const state = {
    value: 0,
}

const counterReducer = createReducer(state, (builder) => {
    builder
        .addCase(increment, (state) => {
            state.value += 1
        })
        .addCase(decrement, (state) => {
            state.value -= 1
        })
})


export default counterReducer