import { createContext, ReactElement, useState } from "react";

type Props = {
    login: () => void,
    logout: () => void,
    isLoggedIn: boolean
}

export const contextValue: Props = {
    login: () => { },
    logout: () => { },
    isLoggedIn: false
}


export const AuthContext = createContext<Props>(contextValue)



type AuthProps = {
    children: ReactElement | ReactElement[]
}
const AuthContextProvider: React.FC<AuthProps> = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(() => {
        //a function that return true or false
        return localStorage.getItem('isLoggedIn') === 'true'
    })

    const login = () => {
        localStorage.setItem("isLogin", "true")
        setIsLoggedIn(true)
    }

    const logout = () => {
        localStorage.setItem("isLogin", "false")
        setIsLoggedIn(false)
    }

    const context = {
        login,
        logout,
        isLoggedIn: isLoggedIn
    }

    return <AuthContext.Provider value={context}>
        {children}
    </AuthContext.Provider>

}

export default AuthContextProvider