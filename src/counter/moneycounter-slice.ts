
// Ducks pattern

//import function and then type
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getMoneyFromLocalStorage } from "./localstorage";

//The shape of the state
interface CounterState {
    value: number;
}

const initialState: CounterState = {
    value: getMoneyFromLocalStorage()
}

const counterSlice = createSlice({
    name: 'Counter', 
    initialState,
    reducers: {
        //increment immer makes it immutable 
        incremented(state) {
            state.value++;
        }, 
        amountAdded(state, action: PayloadAction<number>) {
            state.value += action.payload;
        },
        //decrement
        amountReduced(state, action: PayloadAction<number>) {
            state.value -= action.payload;
        },
        //reset
        resetMoneyState(state) {
            state.value == 0;
        } 

    }
});

export const { incremented, amountAdded, amountReduced, resetMoneyState } = counterSlice.actions;
export default counterSlice.reducer;