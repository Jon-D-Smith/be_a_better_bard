import axios from 'axios'
import {useState} from 'react'
const Login = () => {
    const [email, setEmail ] = useState()
    const [password, setPassword ] = useState()

    const handleSubmit = (e) => {
        axios.post('/login', {email, password})
    }


    return ( 
        
        <form method="POST" onSubmit={handleSubmit}>
            <div id="email-field">
                <label for="email">Email:</label>
                <input id="email" type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div id="password-field">
                <label for="password">Password:</label>
                <input id="password" type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button type="submit">Login</button>
        </form>
      
     );
}
 
export default Login;