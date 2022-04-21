import React from 'react'
import { Link } from 'react-router-dom'

function Instructions() {
  return (
    <div className='instructions'>
        <h1>Instructions</h1>
        <h3>Make sure you read the instructions from start to finish.</h3>
        <ul>
            <li>1. There are five questions in the quiz.</li>
            <li>2. Click on an answer and proceed to the next question using the next button underneath.</li>
            <li>3. If you want to skip a question, just click on the next button without choosing any option.</li>
            <li>4. You can quit the quiz anytime you want by clicking the submit button.</li>
            <li>5. Once you click on submit, your score would be displayed along with the correct answers!</li>
        </ul>
        <h2>Ready? Let's start!</h2>
        <button><Link to='/Quiz'>START</Link></button>
        <button><Link to='/'>Back to HOME</Link></button>
        
    </div>
  )
  }

export default Instructions