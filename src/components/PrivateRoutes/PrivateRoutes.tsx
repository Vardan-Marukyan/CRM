import {Navigate, Outlet} from "react-router-dom";
import {useAppSelector} from "../../store/store";

export const PrivateRoutes = () => {
    const isAuthStatus = useAppSelector(state => state.auth.isAuthenticated)
    return isAuthStatus ? <Outlet/> : <Navigate to={"/"}/>

}