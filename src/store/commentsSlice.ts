import {createSlice} from "@reduxjs/toolkit";
import {PayloadAction} from "@reduxjs/toolkit";

interface IComment {
    [commentsKey:number]: { comment: string }[]
}

interface IComments{
    comment: IComment
}

const initialState:IComments = {
    comment:{}
}

const commentsSlice = createSlice({
    name: "comment",
    initialState,
    reducers: {
        addComment:(state, action:PayloadAction<{dealId: number, comment: string}>) => {
            if(state.comment[action.payload.dealId]){
                state.comment[action.payload.dealId].push({
                    comment: action.payload.comment
                })
            }else{
                state.comment[action.payload.dealId] = [
                    {comment: action.payload.comment}
                ]
            }
        }
    }
})


export const {addComment} = commentsSlice.actions

export default commentsSlice.reducer