import styled from "styled-components";

export const CustomersContainer = styled.div`
    padding: 25px 30px;
    width: 100%;
`

export const Ttitle = styled.div`
    color: #F2F6FF;
    font-size: 24px;
    margin-bottom: 30px;
`

export const CustomersList = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
`

export const Customer = styled.li`
    display: flex;
    align-items: center;
    padding: 10px 0;
    border-bottom: 1px solid #1e232c;
`

export const CustomerInfo = styled.div`
    width: 150px;
    color: #F2F6FF;
    &:not(:last-child) {
        margin-right: 85px;
    }
    
    img {
        width: 50px;
        cursor: pointer;
    }
`

export const CustomersListSubTitle = styled.div`
    border-bottom: 1px solid #1e232c;
    padding: 10px 0;
    display: flex;
`

export const CustomersSubTitleItem = styled.div`
    width: 150px;
    &:not(:last-child) {
        margin-right: 85px;
    }
    
    color: #677285;
`