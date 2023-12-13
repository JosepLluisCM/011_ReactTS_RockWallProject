/* Import of default redux hooks */
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
/* Import of the custom types we created on ./store/index.ts */
import type { RootState, AppDispatch } from "../store/index";

/*  Use throughout your app instead of plain `useDispatch` and `useSelector`. This replaces the default hooks and adds the typinf so we don't have to use it every time */
type DispatchFunc = () => AppDispatch;
export const useAppDispatch: DispatchFunc = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
