import {createSlice} from "@reduxjs/toolkit";
import {PayloadAction} from "@reduxjs/toolkit";
import logo from "../assets/image/2919906.png"

interface IDeal{
    id: number
    name: string
    email: string
    price: string
    company: string
    source?: string
    img?: string
    status: string
    statusTitle: string
    date: string
}

interface IDeals{
    deal: IDeal[]
}

const initialState:IDeals = {
    deal:[
        {
            id: 332,
            img: logo,
            name: "cow",
            email: "sport@gmail.com",
            price: "500.000.00$",
            company: "Альфа",
            source: "",
            date: "30 сентября 2024г.",
            status: "incoming",
            statusTitle: "Входящие"
        },
        {
            id: 213,
            img: logo,
            name: "Разработка сайта",
            email: "site@gmail.com",
            price: "500.000.00$",
            company: "Альфа банк",
            source: "",
            date: "30 сентября 2024г.",
            status: "incoming",
            statusTitle: "Входящие"
        }
    ]
}

const dealSlice = createSlice({
    name: "deal",
    initialState,
    reducers: {
        addDela: (state, action:PayloadAction<IDeal>) => {
            state.deal.push({
                id: action.payload.id,
                img: logo,
                name: action.payload.name,
                email: action.payload.email,
                price: action.payload.price,
                company:action.payload.company,
                source: "",
                date:action.payload.date,
                status: action.payload.status,
                statusTitle: action.payload.statusTitle
            })
        },
        updateDeal: (state, action:PayloadAction<{name: string, id: number, email: string, source:string, img: string}>) => {
            const deal = state.deal.find(({id}) => id === action.payload.id)
            if (deal){
                deal.name = action.payload.name
                deal.email = action.payload.email
                deal.source = action.payload.source
                deal.img = action.payload.img
            }
        },
        updateDealStatus: (state, action:PayloadAction<{id: number, status: string, statusTitle: string}>) => {
            const deal = state.deal.find(({id}) => id === action.payload.id)
            if(deal){
                deal.status = action.payload.status
                deal.statusTitle = action.payload.statusTitle
            }
        }
    }
})

export const {addDela, updateDeal, updateDealStatus} = dealSlice.actions

export default dealSlice.reducer