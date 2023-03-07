import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Choices = () => {
  const [choice, setChoice] = useState("")
  const host = process.env.NODE_ENV !== "production" ? "http://localhost:5000" : "https://xenonstk-tawan21.vercel.app"
  const history = useNavigate()
  let prevCh = '';

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`${host}/api/choice/create`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email: localStorage.email, choice: choice })
    });
    const json = await response.json()

    if (json.success) {
      history("/profile");
    }
  }

  const onChange = (e) => {
    setChoice(e.target.value)
  }

  return (
    <div className="container">
      <h2 align="center">Tell us your pick for Sports Day!</h2>
      <form onSubmit={handleSubmit}>
        <article className="grid">
          <div>
            <label htmlFor="fruit">Sport</label>
            <select id="fruit" required name="choice" defaultValue={""} onChange={onChange}>
              <option value=""></option>
              <option value="Cricket">Cricket</option>
              <option value="Football">Football</option>
              <option value="Badminton">Badminton</option>
              <option value="Volleyball">Volleyball</option>
              <option value="Running">Running</option>
            </select>
            <button type="submit" className="contrast">Apply</button>
          </div>
        </article>
      </form>
    </div>
  )
}

export default Choices