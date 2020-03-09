import React from 'react';
import SignIn from '../../components/sign-in/sign-in.component.jsx'
import Signup from '../../components/signup/signup.component.jsx'
import './signinandup.styles.scss'

const SigninAndUp = () => {
  return (
    <div className='sign-in-and-sign-up'>
      <SignIn />
      <Signup />
    </div>
  );
}

export default SigninAndUp;
