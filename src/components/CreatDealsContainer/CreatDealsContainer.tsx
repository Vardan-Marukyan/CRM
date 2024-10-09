import * as Styled from "./style"
import {DealCard} from "../DealCard/DealCard";
import {useAppSelector, useAppDispatch} from "../../store/store";
import {useDrop} from "react-dnd";
import {updateDealStatus} from "../../store/dealSlice";

interface StatusBoxProps {
    title: string
    status: string
    color: string
    id: number
}

interface CreatDealsProps {
    status: string
    handleChangeInput: (status: string, inputName: string, value: string) => void
    handleCreateDeal: (status: string, statusTitle: string) => void
    dealCreatBoxOpen: {[key: string]: boolean}
    changeInput: {
        [key:string]:{
            name: string
            company: string
            email: string
            price: string
        }
    },
    show: () => void,
    setDealId: (id: number) => void,
    statusBox: StatusBoxProps,
    handleOpenDealBox: (status: string) => void
}

export const CreatDealsContainer = ({status, changeInput, handleChangeInput, dealCreatBoxOpen, handleCreateDeal, show, setDealId, statusBox, handleOpenDealBox}:CreatDealsProps) => {
    const deals = useAppSelector(state => state.deal.deal)
    const dispatch = useAppDispatch()
    const [, dropRef] = useDrop({
        accept: "card",
        drop: (item: {id: number}) => {
            statusChange(item.id, statusBox.status, statusBox.title)
        }
    })

    const statusChange = (id: number, status: string, statusTitle: string) => {
        dispatch(updateDealStatus({
            id:id,
            status:status,
            statusTitle: statusTitle
        }))
    }
    return (
        <div style={{display: "flex"}} key={statusBox.id} ref={dropRef}>
            <Styled.DealsContainer>
                <Styled.DealStatusBox color={statusBox.color}>{statusBox.title}</Styled.DealStatusBox>
                <Styled.AddDealButton className={dealCreatBoxOpen[statusBox.status] ? "icon-arrow_up" : "icon-plus"}
                                      onClick={() => handleOpenDealBox(statusBox.status)}/>
                <Styled.CreatDealBox display={dealCreatBoxOpen[status]}>
                    <Styled.CreatDealInput placeholder={"Наименование"} value={changeInput[status]?.name || ""}
                                           onChange={e => handleChangeInput(status, "name", e.target.value)}/>
                    <Styled.CreatDealInput placeholder={"Сумма"} value={changeInput[status]?.price || ""}
                                           onChange={e => handleChangeInput(status, "price", e.target.value)}/>
                    <Styled.CreatDealInput placeholder={"Email"} value={changeInput[status]?.email || ""}
                                           onChange={e => handleChangeInput(status, "email", e.target.value)}/>
                    <Styled.CreatDealInput placeholder={"Компания"} value={changeInput[status]?.company || ""}
                                           onChange={e => handleChangeInput(status, "company", e.target.value)}/>
                    <div>
                        <Styled.CreatDealButton onClick={() => handleCreateDeal(status, statusBox.title)}>Добавить</Styled.CreatDealButton>
                    </div>
                </Styled.CreatDealBox>
                {deals?.map((deal) => {
                    return deal.status !== statusBox.status ? null : (
                        <DealCard deal={{
                            name: deal.name,
                            id: deal.id,
                            price: deal.price,
                            company: deal.company,
                            date: deal.date
                        }} show={show} setDealId={setDealId} key={deal.id}/>
                    )
                })}
            </Styled.DealsContainer>
        </div>

)
}