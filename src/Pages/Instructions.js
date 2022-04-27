import React from 'react'
import { Link } from 'react-router-dom'

function Instructions() {
  return (
    <div className='instructions'>
        <h1>Instructions</h1>
        <h3>Make sure you read the instructions carefully from start to finish.</h3>
        <ul>
            <p>1. There are five questions in the quiz.</p>
            <p>2. Click on an answer and proceed to the next question using the next button underneath.</p>
            <p>3. If you want to skip a question, just click on the next button without choosing any option.</p>
            <p>4. You can quit the quiz anytime you want by clicking the submit button.</p>
            <p>5. Once you click on submit, your score would be displayed along with the correct answers!</p>
        </ul>
        <h2>Ready?</h2>
        <ul>
        <button type='button' className='btn btn-lg btn-primary'><Link to='/Quiz'>Yup. Let's START!</Link></button>
        <button><Link to='/'>Not really.HOME pls.</Link></button>
        </ul>
        
    </div>
  )
  }

export default Instructions