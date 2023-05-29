import React, { useEffect, ReactNode, useContext } from "react"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../context/authContext"

type Props = {
    children: ReactNode
}
const Protected: React.FC<Props> = ({ children }) => {
    const { isLoggedIn } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (!isLoggedIn) {
            navigate('/login', { replace: true })
        }
    }, [isLoggedIn, navigate])

    if (!isLoggedIn) {
        console.log('not logged in')
        return null;
    }

    return <>{children}</>
};

export default Protected
