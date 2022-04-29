import React from 'react'
import { Link } from 'react-router-dom'

function Contact() {
  return (
    <div className='contact'>
        <h1>Our Contact Details:</h1>
        <h3>Ayush Das</h3>
        <h3>Software Analyst Intern</h3>
        <h3>OnGraph</h3>
        <h4>You can call us if you have any queries. Thanks.</h4>
        <button className='home'><Link to='/'>HOME</Link></button>
    </div>
  )
}

export default Contact