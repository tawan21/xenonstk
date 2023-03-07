import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Contact = () => {
  const [fields, setFields] = useState({ email: "", stream: "", query: "" })
  const host = process.env.NODE_ENV !== "production" ? "http://localhost:5000" : "https://xenonstk-tawan21.vercel.app"
  const history = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`${host}/api/query/create`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email: fields.email, stream: fields.stream, query: fields.query })
    });
    const json = await response.json()

    if (json.success) {
      history("/profile");
    }
  }

  const onChange = (e) => {
    setFields({ ...fields, [e.target.name]: e.target.value })
  }

  return (
    <div className="container">
      <h2 align="center">Admission Inquiry</h2>
      <form onSubmit={handleSubmit}>
        <article className="grid">
          <div>
            <label htmlFor="firstname">
              Email address
              <input type="text" id="firstname" name="email" placeholder="Email ID" required onChange={onChange} />
            </label>
            <label htmlFor="fruit">Stream</label>
            <select id="fruit" required name="stream" defaultValue={""} onChange={onChange}>
              <option value=""></option>
              <option value="CSE">Computer Science</option>
              <option value="IT">Information Technology</option>
              <option value="ME">Mechanical Engg.</option>
              <option value="ECE">Electronics & Communication Engg.</option>
              <option value="EE">Electrical Engg.</option>
            </select>
            <label htmlFor="lastname">
              Query
              <textarea style={{ resize: 'none' }} id="lastname" name="query" placeholder="Type here..." required onChange={onChange} />
            </label>
            <button type="submit" className="contrast">Submit</button>
          </div>
        </article>
      </form>
    </div>
  )
}

export default Contact