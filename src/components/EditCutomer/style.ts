import styled from "styled-components";
import {CustomersContainer} from "../Customers/style";

export const CustomerContainer = styled.div`
    padding: 25px 30px;
    width: 100%;
`
export const Ttitle = styled.div`
    color: #F2F6FF;
    font-size: 24px;
    margin-bottom: 30px;
`
export const Input = styled.input`
    background: none;
    border: 1px solid #1B2433;
    border-radius: 3px;
    padding: 6px 5px 6px 10px;
    outline: none;
    color: #cecece;
`
export const Button = styled.button`
    border: none;
    border-radius: 5px;
    background: #202937;
    color: #fff;
    padding: 5px 7px;
    font-family: "Jost";
    font-size: 13px;
    cursor: pointer;
`

export const EditContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    
    input:not(:last-child) {
        margin-bottom: 20px;
    }
`

export const ProfileImage = styled.img`
    width: 50px;
    margin-bottom: 15px;
`

export const SelectedProfileImageContainer = styled.div`
    display: flex;
    flex-direction: column;
`

export const SubTitle = styled.div`
    color: #F2F6FF;
    font-size: 13px;
    margin-bottom: 15px;
`

export const SelectedProfileButton = styled.button`
    display: flex;
    width: 250px;
    border: 1px solid #1B2433;
    border-radius: 3px;
    padding: 6px 5px 6px 10px;
    background: none;
    color: #fff;
    cursor: pointer;
`