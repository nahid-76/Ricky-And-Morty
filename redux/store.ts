import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux";
import charactersSlice from "./slices/charactersSlice";
import episodesSlice from "./slices/episodesSlice";
import locationsSlice from "./slices/locationsSlice";

export const store = configureStore({
    reducer: {
        charactersSlice,
        episodesSlice,
        locationsSlice
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;