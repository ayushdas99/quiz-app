import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div className='login-page'>
        <h1>Login Page</h1>
        <form>
            <label>
                Name:
                <input type="text" name='name'/>
            </label>
            <label>
                Age:
                <input type="text" name='name'/>
            </label>
            <label>
                Designation:
                <input type="text" name='name'/>
            </label>
            <label>
                Favourite subject:
                <input type="text" name='name'/>
            </label>
        </form>
        <button><Link to='/Instructions'>Let's go!</Link></button>
    </div>
  )
}

export default Login