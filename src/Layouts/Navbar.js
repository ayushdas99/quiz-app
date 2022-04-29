import React from 'react'
import QuizData from '../QuizData'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='navbar'>
      <h1>MCQ Quiz</h1>
      <ul>
        <li><Link to='/About'><b>ABOUT</b></Link></li>
        <li><Link to='/Login'><b>LOGIN</b></Link></li>
        <li><Link to='/Contact'><b>CONTACT US</b></Link></li>
      </ul>

    </div>
  )
}

export default Navbar