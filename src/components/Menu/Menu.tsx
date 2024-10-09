import * as Styled from "./style"
import Logo from "../../assets/image/logo.png"
import {useEffect} from "react";
import {Link} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../store/store";
import {logout} from "../../store/authSlice";
import {useNavigate} from "react-router-dom";

export const Menu = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const isAuthStatus = useAppSelector(state => state.auth)

    useEffect(() => {
        if(!isAuthStatus.isAuthenticated){
            navigate("/")
        }
    }, [isAuthStatus]);

    const handleLogout = () => {
        dispatch(logout())
    }

    return (
        <Styled.MenuContainer>
            <div style={{ margin: "0 10px 30px 10px"}}>
                <Styled.LogoutIcon className={"icon-exit"} onClick={handleLogout}></Styled.LogoutIcon>
                <Styled.LogoContainer>
                    <Styled.LogoImage src={Logo}/>
                </Styled.LogoContainer>
            </div>

            <Styled.MenuUl>
                <Styled.MenuIi>
                    <Link to={"/home"}>
                        <div className={"icon-home menu-icon"}></div>
                        <div>Home</div>
                   </Link>
                </Styled.MenuIi>
                <Styled.MenuIi>
                    <div className={"icon-products menu-icon"}></div>
                    <div>Products</div>
                </Styled.MenuIi>
                <Styled.MenuIi>
                    <div className={"icon-paymentst menu-icon"}></div>
                    <div>Payments</div>
                </Styled.MenuIi>
                <Styled.MenuIi>
                    <div className={"icon-order menu-icon"}></div>
                    <div>Orders</div>
                </Styled.MenuIi>
                <Styled.MenuIi>
                    <Link to={"/customers"}>
                        <div className={"icon-customers menu-icon"}></div>
                        <div>Customers</div>
                    </Link>
                </Styled.MenuIi>
                <Styled.MenuIi>
                    <div className={"icon-feedback menu-icon"}></div>
                    <div>Feedback</div>
                </Styled.MenuIi>
                <Styled.MenuIi>
                    <div className={"icon-settings menu-icon"}></div>
                    <div>Settings</div>
                </Styled.MenuIi>
                <Styled.MenuIi>
                    <div className={"icon-support menu-icon"}></div>
                    <div>Help center</div>
                </Styled.MenuIi>
            </Styled.MenuUl>
        </Styled.MenuContainer>
    )
}