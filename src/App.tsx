import React, { useContext } from "react"
import AuthContextProvider, { AuthContext } from "./context/authContext"
import './App.css'
import ToDo from "./pages/Home"
import About from "./pages/About"
import Login from "./pages/login"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"


function App() {
  return (
    <div className="App">
      <Router>
        <AuthContextProvider>
          <Routes>
            <Route path="/" element={<ToDo />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </AuthContextProvider>
      </Router>
    </div>
  )
}

export default App
