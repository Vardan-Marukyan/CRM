import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface IUser{
    name: string
    password: string
}

interface IAuth{
    isAuthenticated: boolean
    user: IUser | null
}

const initialState:IAuth = {
    isAuthenticated: false,
    user: null
}


const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action:PayloadAction<IUser>) => {
            state.isAuthenticated = true
            state.user = {
                name: action.payload.name,
                password: action.payload.password
            }
        },

        logout: (state) => {
            state.isAuthenticated = false
            state.user = null
        }
    }

})

export const {login, logout} = authSlice.actions

export default authSlice.reducer