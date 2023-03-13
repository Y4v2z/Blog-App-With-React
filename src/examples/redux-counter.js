import { createStore } from 'redux';

// REDUCER
const initialState = {
    count: 0
}

const countReducer = (state = initialState, action) => {
    switch (action.type) {
        case "İNCREMENT":
            const incrementBy = typeof action.incrementBy === "number" ? action.incrementBy : 1;
            return {
                count: state.count + incrementBy
            }
        case "DECREMENT":
            return {
                count: state.count - 6
            }
        case "RESET":
            return {
                count: 0
            }
        default:
            return state
    }
}

// Store(Redux)
const store = createStore(countReducer);

// Subscribe
store.subscribe(() => {
    console.log(store.getState());
})
// Dispatch
store.dispatch({
    type: "İNCREMENT"
})
store.dispatch({
    type: "DECREMENT"
})
store.dispatch({
    type: "RESET"
})
store.dispatch({
    type: "İNCREMENT",
    incrementBy: 10
})
store.dispatch({
    type: "RESET"
})
