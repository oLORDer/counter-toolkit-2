import { configureStore } from "@reduxjs/toolkit"
import { reducer as counterReducer } from "./reducer"

// localStorage.setItem("localCount", JSON.stringify(15))
const preloadedState = { counter: JSON.parse(localStorage.getItem("localCount")) ?? 10 }


export const store = configureStore({
    reducer: counterReducer,
    preloadedState,
})