import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../../context/authContext"

const Login: React.FC = () => {
    const { login } = useContext(AuthContext)
    const navigate = useNavigate()
    const handleLogin = () => {
        login();
        navigate("/")
    }
    return (<button onClick={handleLogin} >Login</button>)
}

export default Login