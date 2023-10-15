import { useSelector } from "react-redux";
import { selectIsLogIn, selectIsRefresh, selectUserName } from "redux/auth/selectors";





export const useAuth = () => {
    const isLogIn = useSelector(selectIsLogIn);
    const name = useSelector(selectUserName);
    const isRefresh = useSelector(selectIsRefresh);

    return { isLogIn, name, isRefresh };
}