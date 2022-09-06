// import updateLocalStorage from "../helpers/updateLocalStorage"


export const reducer = (state = {
    counter: 0,
}, action) => {
    switch (action.type) {
        case "counterPlus":
            const counterPlus = state.counter + 1
            // updateLocalStorage(counterPlus)
            return { counter: counterPlus }
        case "counterMinus":
            const counter = state.counter - 1
            // updateLocalStorage(counter)
            return { counter }

        default: return state
    }
}