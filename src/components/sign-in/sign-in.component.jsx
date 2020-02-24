import React, { Component } from 'react'
import FormInput from '../form-input/form-input.component.jsx'
import CustomButton from '../custom-button/custom-button.component.jsx'
import { signInWithGoogle } from '../../firebase/firebase.utils.js'
import './sign-in.styles.scss'

class SignIn extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: ''
    }
  }


  handleSubmit = (e) => {
    e.preventDefault()
    this.setState({email: '', password: ''})
  }


  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }


  render() {
    return (
      <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            handleChange={this.onChange}
            name='email'
            type='email'
            value={this.state.email}
            required
            label='email'/>

          <FormInput
            handleChange={this.onChange}
            name='password'
            type='password'
            value={this.state.password}
            required
            label='password'/>
          <CustomButton type='submit'>Sign in</CustomButton>
          <CustomButton onClick={signInWithGoogle}>Sign in with Google</CustomButton>
        </form>
      </div>
    )
  }
}

export default SignIn;
