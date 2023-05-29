import { MouseEvent, useContext } from "react";
import { Link, useNavigate } from "react-router-dom"
import { AuthContext } from "../../context/authContext";
const Nav = () => {
    const { logout } = useContext(AuthContext)
    const navigate = useNavigate()
    const handleLogout = (e: MouseEvent<HTMLAnchorElement>) => {
        //prevent default link action
        e.preventDefault();
        logout()
        navigate("/login")

    }
    return (<nav>
        <Link to="/">todo</Link>
        <Link to="/about">about</Link>
        <a onClick={(e) => { handleLogout(e) }}>Logout</a>
    </nav>)
}

export default Nav