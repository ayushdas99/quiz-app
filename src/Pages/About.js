import React from 'react'
import { Link } from 'react-router-dom'

function About() {
  return (
    <div className='about'>
        <h1>About</h1>
        <p>General knowledge is important for enhancing our sense of perceiving the world, for better understanding, and analysis of the situations cannot be possible without proper knowledge.</p>
        <p>What else better than a quiz for imparting this knowledge?</p>
        <p>Our MCQ Quiz app aims to provide just what we have learned over the years, bit by bit.</p>
        <p>Just devote 5 mins of your time for this amazing quiz and see what differenec it makes!</p>
        <button className='home'><Link to='/'>HOME</Link></button>
    </div>
  )
}

export default About