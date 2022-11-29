import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getXPFromLocalStorage } from "./localstorage";

interface XPcounterState {
    value: number;
}

const initialState: XPcounterState = {
    value: getXPFromLocalStorage(),
}

const xpCounterSlice = createSlice({
    name: 'XPCounter', 
    initialState,
    reducers: {
        addAmount(state, action: PayloadAction<number>) {
            state.value += action.payload;
        }, 
        levelUp(state, action: PayloadAction<number>) {
            state.value -= action.payload;
        },
        resetLevelState(state) {
            state.value == 0;
        } 
        
    }
})

export const { addAmount, levelUp, resetLevelState } = xpCounterSlice.actions;
export default xpCounterSlice.reducer;

function serialisedXPState(serialisedXPState: any, string: any): number {
    throw new Error("Function not implemented.");
}
