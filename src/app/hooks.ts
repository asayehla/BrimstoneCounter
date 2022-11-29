import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "./store";

// new pattern. 
// pretyped version of useDispatch and useSelector 
// that already know the state for the
// 
export const useAppDispatch = () => useDispatch<AppDispatch>();

// useSelector i s a function, we alias it and adding types.
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
