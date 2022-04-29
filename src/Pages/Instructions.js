import React from 'react'
import { Link } from 'react-router-dom'

function Instructions() {
  return (
    <div className='instructions'>
        <h1>Instructions</h1>
        <h3>Make sure you read the instructions carefully from start to finish.</h3>
        <ul>
            <p>1. There are seven questions in the quiz, with four options for each question.</p>
            <p>2. Click on an option and proceed to the next question using the next button below.</p>
            <p>3. If you want to skip a question, just click on the next button without choosing any option.</p>
            <p>4. You can toggle to any question you like using the question grid on the right.</p>
            <p>5. You can quit the quiz anytime you want by clicking the submit button.</p>
            <p>6. Once you click on submit, your score would be displayed along with the correct answers!</p>
        </ul>
        <h2>Ready?</h2>
        <ul>
        <button className='instruction-button'><Link to='/Quiz'>Yup. Let's START!</Link></button>
        <button className='home'><Link to='/'>Not really! Take me HOME.</Link></button>
        </ul>
        
    </div>
  )
  }

export default Instructions