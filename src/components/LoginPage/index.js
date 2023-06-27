import React, {useState} from 'react'
import Cookies from 'js-cookie'
import {GoogleLogin} from 'react-google-login'
import {FaApple} from 'react-icons/fa'
import {useNavigate} from 'react-router-dom'
import './index.css'

const clientId =
  '75030971780-pjohi0mlucn3u0snvbit9jfgrbplnra4.apps.googleusercontent.com'

const LoginPage = ({setProfileObj}) => {
  const [emailInput, setEmailInput] = useState('')
  const [passwordInput, setPasswordInput] = useState('')
  const navigate = useNavigate()

  const onEmailInput = event => {
    setEmailInput(event.target.value)
  }

  const onPasswordInput = event => {
    setPasswordInput(event.target.value)
  }

  const submitForm = event => {
    event.preventDefault()
    console.log(emailInput, passwordInput)
  }

  const onSuccess = res => {
    const accessToken = res.accessToken
    Cookies.set('jwtToken', accessToken, {expires: 1})
    console.log('LOGIN SUCCESS! Current user:', res.profileObj)
    setProfileObj(res.profileObj) // Call the method to update profileObj in App.js
    if (accessToken !== undefined) {
      navigate('/')
    } // Navigate to the home page
  }

  const onFailure = res => {
    console.log('LOGIN FAILED! res:', res)
  }

  return (
    <div className="login-container">
      <div className="login-left-container">
        <h1 className="login-left-heading">Board.</h1>
      </div>
      <div className="login-right-container">
        <div className="login-right-inner-container">
          <h1 className="sign-in-heading">Sign In</h1>
          <p className="sign-in-txt">Sign in to your account</p>
          <div className="login-providers">
            <div className="login-provider-container google-login">
              <GoogleLogin
                clientId={clientId}
                buttonText="Sign in with Google"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
                isSignedIn={true}
              />
            </div>
            <div className="login-provider-container">
              <FaApple className="provider-img" />
              <p className="provider-txt">Sign in with Apple</p>
            </div>
          </div>
          <form className="login-form" onSubmit={submitForm}>
            <label className="login-label" htmlFor="emailId">
              Email address
            </label>
            <input
              type="email"
              className="login-input"
              id="emailId"
              onChange={onEmailInput}
            />
            <label className="login-label" htmlFor="passwordId">
              Password
            </label>
            <input
              type="password"
              className="login-input"
              id="passwordId"
              onChange={onPasswordInput}
            />
            <p className="forgot-txt">Forgot password?</p>
            <button type="submit" className="login-btn">
              Sign In
            </button>
          </form>
          <p className="register-msg">Don't have an account? Register here</p>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
