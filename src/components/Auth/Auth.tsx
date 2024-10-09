import * as Styled from "./style"
import {useState} from "react";
import {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {useAppSelector, useAppDispatch} from "../../store/store";
import {login} from "../../store/authSlice";

export const Auth = () => {
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()
    const dispatch = useAppDispatch()

    const isAuthStatus = useAppSelector(state => state.auth)

    useEffect(() => {
        if(isAuthStatus.isAuthenticated){
            navigate("/home")
        }
    }, [isAuthStatus]);

    const handleLoginProfile = () => {
        dispatch(login({
            name: name,
            password: password
        }))
    }

    return (
        <>
            <Styled.GlobalStyleAuth/>
            <Styled.AuthBox>
                <Styled.AuthTitle>Login</Styled.AuthTitle>
                <div style={{display: "flex", flexDirection: "column"}}>
                    <Styled.AuthInput placeholder={"Name"} value={name} onChange={e => setName(e.target.value)}/>
                    <Styled.AuthInput placeholder={"Password"} value={password} onChange={e => setPassword(e.target.value)} type={"password"}/>
                    <div style={{display:"flex", justifyContent: "center"}}>
                        <Styled.AuthButton onClick={handleLoginProfile}>Login</Styled.AuthButton>
                    </div>
                </div>
            </Styled.AuthBox>
        </>
    )
}