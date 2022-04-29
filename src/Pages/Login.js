import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div className='login-page'>
        <h1>Tell us about yourself!</h1>
        <form>
            <label>
                <input type="text" name='name' placeholder='Name...'/>
            </label>
            <label>
                <input type="text" name='age' placeholder='Age...'/>
            </label>
            <select id="designation" name="designation">
          <option value="Student">Student</option>
          <option value="Private Job">Private Job</option>
          <option value="Business">Business</option>
        </select>
        <select id="country" name="country">
          <option value="australia">Australia</option>
          <option value="india">India</option>
          <option value="usa">USA</option>
          <option value="uk">United Kingdom</option>
          <option value="france">France</option>
          <option value="canada">Canada</option>
        </select>
        <select id="subject" name="subject">
          <option value="gen">Political Affairs</option>
          <option value="gen">History</option>
          <option value="gen">Sports</option>
          <option value="gen">Science and Technology</option>
          <option value="gen">General Awareness</option>
        </select>
        </form>
        <button className='go-button'><Link to='/Instructions'><b>LET'S GO!</b></Link></button>
    </div>
  )
}

export default Login