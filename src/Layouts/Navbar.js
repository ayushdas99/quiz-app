import React from 'react'
import QuizData from '../QuizData'

function Navbar() {
  return (
    <div className='sidebar'>
        <h1>Questions</h1>
        <button onClick={QuizData[0]}>1</button>  
        <button onClick={QuizData[1]}>2</button>  
        <button onClick={QuizData[2]}>3</button>  
        <button onClick={QuizData[3]}>4</button>  
        <button onClick={QuizData[4]}>5</button>
    </div>
  )
}

export default Navbar