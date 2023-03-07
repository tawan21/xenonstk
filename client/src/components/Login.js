import { React, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const host = process.env.NODE_ENV !== "production" ? "http://localhost:5000" : "https://xenonstk-tawan21.vercel.app"
  const [credentials, setCredentials] = useState({ email: "", password: "" })
  let history = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`${host}/api/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email: credentials.email, password: credentials.password })
    });
    const json = await response.json()
    console.log(json);
    if (json.success) {
      // Save the auth token and redirect
      localStorage.setItem('token', json.authtoken)
      localStorage.setItem('email', credentials.email)
      history("/profile");
    }
  }

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }

  useEffect(() => {
    if(localStorage.token)
      history('/profile')
  }, [])
  

  return (
    <main className="container">
      <article className="grid">
        <div>
          <hgroup>
            <h1>Sign in</h1>
          </hgroup>
          <form onSubmit={handleSubmit}>
            <input type="text" name="email" placeholder="College Mail" aria-label="Login" value={credentials.email} onChange={onChange} required />
            <input type="password" name="password" placeholder="Password" aria-label="Password" value={credentials.password} onChange={onChange} required />
            <button type="submit" className="contrast">Login</button>
          </form>
        </div>
      </article>
    </main>
  )
}

export default Login