import { useSelector } from "react-redux";
import { selectIsLogIn, selectUserName } from "redux/auth/selectors";





export const useAuth = () => {
    const isLogIn = useSelector(selectIsLogIn);
    const name = useSelector(selectUserName);


    return { isLogIn, name };
}