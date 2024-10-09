import styled from "styled-components";

export const LogoContainer = styled.div`
   display: flex;
   justify-content: center;
`
export const MenuContainer = styled.div`
    padding: 25px 0;
    width: 250px;
    background-color: #0E172A;
`
export const MenuIi = styled.li`
    list-style: none;
    padding: 5px 10px;
    transition: all 0.5s;
    border-radius: 5px;
    cursor: pointer;
    display: flex;
    align-items: center;
    
    &:hover {
        background: #e6e6e65c;
    }
    
    .menu-icon{
        margin-right: 5px;
    }
    
    a{
        color: #F2F6FF;
        display: flex;
        align-items: center;
        width: 100%;
        text-decoration: none;
    }
`

export const MenuUl = styled.ul`
    padding: 0 50px 0 20px;
    margin: 0;
    color: #F2F6FF;

    li:not(:last-child){
        margin-bottom: 10px;
    }
`

export const LogoImage = styled.img`
    width: 120px;
`

export const LogoutIcon = styled.div`
    color: #ffffff;
    text-align: end;
    cursor: pointer;
`