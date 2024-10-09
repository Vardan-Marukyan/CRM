import * as Styled from "./style"
import {Menu} from "../Menu/Menu";
import {useState} from "react";
import {addDela} from "../../store/dealSlice";
import {useAppDispatch, useAppSelector} from "../../store/store";
import {Slideover} from "../Slideover/Slideover";
import {CreatDealsContainer} from "../CreatDealsContainer/CreatDealsContainer";



export const Home = () => {
    const [show, setShow] = useState(false)
    const [dealCreatBoxOpen, setDealCreatBoxOpen] = useState<{
        [key: string]: boolean
    }>({})
    const [changeInput, setChangeInput] = useState<{
        [key:string]:{
            name: string
            company: string
            email: string
            price: string
        }
    }>({})

    const dispatch = useAppDispatch()
    const deals = useAppSelector(state => state.deal.deal)
    const formattedDate = new Date().toLocaleDateString('ru-RU');
    const [dealId, setDealId] = useState<number | null>(null)

    const dealsStatusType = [
        {
            title: "Входящие",
            color: "#545864",
            status: "incoming",
            id: 1
        },
        {
            title: "На согласовании",
            color: "#4C495E",
            status: "in_approval",
            id: 2
        },
        {
            title: "В производстве",
            color: "#443B5A",
            status: "in_production",
            id: 3
        },
        {
            title: "Произведено",
            color: "#3B2C55",
            status: "produced",
            id: 4
        },
        {
            title: "К отгрузке",
            color: "#341E51",
            status: "ready_for_shipment",
            id: 5
        }
    ]

    const handleChangeInput = (status:string, elName: string, value: string) => {
        setChangeInput((prev) => ({
            ...prev,
            [status]:{
                ...prev[status],
                [elName]: value
            }
        }))
    }

    const handleOpenDealBox = (status:string) => {
        setDealCreatBoxOpen((prev) => ({
            ...prev,
            [status]: !prev[status]
        }))
    }

    const handleCreateDeal = (status:string, statusTitle: string) => {
        dispatch(addDela({
            id: Date.now(),
            name: changeInput[status].name || "",
            price: changeInput[status].price || "",
            email: changeInput[status].email || "",
            company: changeInput[status].company || "",
            date: formattedDate,
            status: status,
            statusTitle: statusTitle
        }))

        setDealCreatBoxOpen((prev) => ({
            ...prev,
            [status]: false
        }))

        setChangeInput((prev) => ({
            ...prev,
            [status]: {
                name: "",
                company: "",
                email: "",
                price: ""
            }
        }))
    }

    const handleShow = () => {
        setShow(!show)
    }

    return (
        <>
            <div style={{display: "flex", minHeight: "100%"}}>
                <Menu/>
                <Styled.HomePage>
                    <Styled.Title >Crm System</Styled.Title>
                    <div style={{display: "flex", justifyContent: "space-between", height: "100%"}}>
                        {dealsStatusType.map(element => {
                            return (
                                <CreatDealsContainer status={element.status} handleChangeInput={handleChangeInput} handleCreateDeal={handleCreateDeal} dealCreatBoxOpen={dealCreatBoxOpen} changeInput={changeInput} show={handleShow} setDealId={setDealId} statusBox={element} handleOpenDealBox={handleOpenDealBox}/>
                            )
                        })}
                    </div>
                </Styled.HomePage>
            </div>
            <Slideover show={show} close={handleShow} id={dealId}/>
        </>
    )
}