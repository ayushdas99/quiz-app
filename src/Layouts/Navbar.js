import React from 'react'
import QuizData from '../QuizData'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='navbar'>
      <h1>MCQ Quiz</h1>
      <ul>
        <li><Link to='/About'>About</Link></li>
        <li><Link to='/Login'>Login</Link></li>
        <li><Link to='/Contact'>Contact Us</Link></li>
      </ul>

    </div>
  )
}

export default Navbar