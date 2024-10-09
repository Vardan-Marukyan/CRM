import * as Styled from "./style"
import {Menu} from "../Menu/Menu";
import {useNavigate} from "react-router-dom";
import React from "react";
import {useLocation} from "react-router-dom";
import {useAppSelector} from "../../store/store";


interface ICutomersInfo{
    id: number
    name: string,
    email?: string,
    price: string,
    company: string,
    source?: string,
}

export const Customers = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const handleViewDetails = (info:ICutomersInfo) => {
        navigate("/cutomer/${cutomer.id}", {state: info})
    }

    const state = useAppSelector((a) => a.deal.deal)

    return (
        <div style={{display: "flex", minHeight: "100%"}} key={location.key}>
            <Menu/>
            <Styled.CustomersContainer>
                <Styled.Ttitle>Наши Клиенты</Styled.Ttitle>
                <div>
                    <Styled.CustomersListSubTitle>
                        <Styled.CustomersSubTitleItem>Изображение</Styled.CustomersSubTitleItem>
                        <Styled.CustomersSubTitleItem>Наименование</Styled.CustomersSubTitleItem>
                        <Styled.CustomersSubTitleItem>Email</Styled.CustomersSubTitleItem>
                        <Styled.CustomersSubTitleItem>Откуда пришел</Styled.CustomersSubTitleItem>
                    </Styled.CustomersListSubTitle>
                </div>
                <Styled.CustomersList>
                    {state.map(element => {
                        return (
                            <Styled.Customer  key={element.id}>
                                <Styled.CustomerInfo>
                                    {typeof element.img === "string" ? (
                                        <img src={element.img} alt="Дефолтное изображение" onClick={() => handleViewDetails(element)}/>
                                    ) : element.img ? (
                                        <img src={URL.createObjectURL(element.img)} alt="Выбранное изображение" onClick={() => handleViewDetails(element)}/>
                                    ) : (
                                        null
                                    )}
                                </Styled.CustomerInfo>
                                <Styled.CustomerInfo>{element.name}</Styled.CustomerInfo>
                                <Styled.CustomerInfo>{element.email}</Styled.CustomerInfo>
                                <Styled.CustomerInfo>{element.source}</Styled.CustomerInfo>
                            </Styled.Customer>
                        )
                    })}
                </Styled.CustomersList>
            </Styled.CustomersContainer>
        </div>
    )
}