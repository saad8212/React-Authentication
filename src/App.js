import React from 'react'
import './App.css' 
import Login from './components/login/Login'

const App = () => {
    return (
        <div className="app container">
            <h1>Login app <span style={{fontWeight:'lighter'}}>with all Social Media Platforms </span> &#10084;</h1>
            <Login />
        </div>
    )
}

export default App
