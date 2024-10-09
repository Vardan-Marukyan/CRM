import {configureStore} from "@reduxjs/toolkit";
import dealReducer from "./dealSlice"
import commentsReducer from "./commentsSlice"
import authReducer from "./authSlice"
import {useDispatch, useSelector} from "react-redux";


export const store = configureStore({
    reducer:{
        auth: authReducer,
        deal: dealReducer,
        comment: commentsReducer
    }
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()