import React from 'react'
import { Link } from 'react-router-dom'

function Instructions() {
  return (
    <div>
        <h1>Instructions</h1>
        <ul>
            <li>There are five questions in the quiz</li>
            <li>Click on an answer and proceed to the next question</li>
            <li>After the last question is completed, you will get to know your score!</li>
        </ul>
        <h2>Let's start now:</h2>
        <button><Link to='/Quiz'>START</Link></button>
    </div>
  )
  }

export default Instructions