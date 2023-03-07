import React, { useEffect, useState } from 'react'

const Profile = () => {
  const host = process.env.NODE_ENV !== "production" ? "http://localhost:5000" : "https://xenonstk-tawan21.vercel.app"
  const [details, setDetails] = useState({});

  const getDetails = async () => {
    const response = await fetch(`${host}/api/auth/getuser`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'auth-token': localStorage.token
      },
    });
    setDetails(await response.json())
  }

  useEffect(() => {
    getDetails();
  }, [])


  return (
    <div className="container">
      <h2 align="center">About You</h2>
      <article>Name: <kbd>{details.name}</kbd></article>
      <article>CRN: <kbd>{details.crn}</kbd></article>
      <article>College Email: <kbd>{details.email}</kbd></article>
      <article>Graduation Year: <kbd>{details.grad}</kbd></article>
      <article>Degree Specialization: <kbd>{details.spec}</kbd></article>
    </div>
  )
}

export default Profile