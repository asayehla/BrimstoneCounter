import { configureStore } from "@reduxjs/toolkit";

import moneycounterReducer from '../counter/moneycounter-slice';
import xpcounterReducer from '../counter/xpcounter-slice';

export const store = configureStore({
    reducer: { 
        moneyCounter: moneycounterReducer,
        xpcounter: xpcounterReducer,
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;