import styled from "styled-components";

interface StyledProps{
    display: boolean
}

interface StyledPropsDeal{
    color: string
}

export const AddDealButton = styled.div`
    width: 20px;
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    border: 1px solid #1B2433;
    border-radius: 50%;
    color: #1B2433;
    cursor: pointer;
    margin-bottom: 20px;
`

export const DealStatusBox = styled.div<StyledPropsDeal>`
    padding: 5px 20px;
    background: ${(props) => (props.color)};
    color: #F2F6FF;
    margin-bottom: 20px;
    border-radius: 3px;
    width: 220px;
    display: flex;
    justify-content: center;
    font-size: 16px;

    @media (max-width: 1670px) {
        width: 170px;
    }

    @media (max-width: 1400px) {
        width: 140px;
        font-size: 15px;
    }

    @media (max-width: 1220px) {
        width: 120px;
        font-size: 14px;
    }
`

export const DealsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`


export const CreatDealInput = styled.input`
    background: none;
    border: 1px solid #1B2433;
    padding: 7px 10px;
    margin-bottom: 10px;
    outline: none;
    border-radius: 3px;
    color: #F2F6FF;
`

export const CreatDealButton = styled.button`
    background: none;
    border: 1px solid #1B2433;
    border-radius: 3px;
    color: #9c9c9f;
    padding: 5px;
    font-size: 12px;
    cursor: pointer;
`

export const CreatDealBox = styled.div<StyledProps>`
    opacity: ${(props) => (props.display ? 1 : 0)};
    height: ${(props) => (props.display ? 'auto' : '0')};
    overflow: hidden;
    display: flex;
    flex-direction: column;
    width: 100%;
    transition: opacity 0.5s, height 0.5s;
    margin-bottom: ${(props) => (props.display ? "30px" : "0px")};
`

