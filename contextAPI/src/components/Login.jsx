import React, { useState, useContext } from 'react'
import UserContext from '../context/UserContext'

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const {setUser} = useContext(UserContext);

    const handleSubmit = (e) => {
        // Call the login function from the context
        e.preventDefault();
        setUser({username, password})
    }
    return (
        <>
            <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder='username'
            />
            <input
                type="text"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder='password'
            />
            <button onClick={handleSubmit}>Submit</button>
        </>
    )
}

export default Login