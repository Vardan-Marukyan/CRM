import styled from "styled-components";
import {createGlobalStyle} from "styled-components";

export const GlobalStyleAuth = createGlobalStyle`
  #root {
      display: flex;
      justify-content: center;
      align-items: center;
  }
`

export const AuthInput = styled.input`
    padding: 6px 5px 6px 10px;
    background: none;
    border: 1px solid #1B2433;
    border-radius: 5px;
    margin-bottom: 10px;
    color: #cecece;
    outline: none;
`

export const AuthBox = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
    background: #0E172A;
    width: 300px;
    border-radius: 5px;
`

export const AuthTitle = styled.div`
    color: #fff;
    text-align: center;
    margin-bottom: 20px;
    font-family: "Jost";
    font-size: 30px;
    font-weight: bold;
`

export const AuthButton = styled.button`
    border: none;
    border-radius: 5px;
    background: #202937;
    color: #fff;
    padding: 5px 40px;
    font-family: "Jost";
    font-size: 13px;
    cursor: pointer;
`
