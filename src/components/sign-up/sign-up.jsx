import React from 'react';
import './sign-up.scss';
import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/custom-button';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

class SignUp extends React.Component {
  constructor() {
    super();

    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  }

  handleSubmit = async event => {
    event.preventDefault();

    const { displayName, email, password, confirmPassword } = this.state;

    // Check if submitted passwords match
    if (password !== confirmPassword) {
      alert("Passwords don't match!");
      return; // exit function if passwords don't match
    } 
    try {
      const { user } = await auth.createUserWithEmailAndPassword(email, password);
      // Use same create user profile as in SignIn
      await createUserProfileDocument(user, { displayName });
      // Then setstate to initial values which clears the form
      this.state = {
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
      }

    } catch (error) {
      console.error(error);
    }
  }
  // handleChange handler function is the same as for the SignIn component, which is dynamically setting state as the form inputs are updated
  handleChange = event => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  }

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return(
      <div className='sign-up'>
        <h2 className='title'>Don't have an account?</h2>
        <span>Sign up with your email and password</span>
        <form className='sign-up-form' onSubmit={this.handleSubmit}>
          <FormInput
            type='text'
            name='displayName'
            value={displayName}
            onChange={this.handleChange}
            label='Display name'
            required
          />
          <FormInput
            type='email'
            name='email'
            value={email}
            onChange={this.handleChange}
            label='Email'
            required
          />
          <FormInput
            type='password'
            name='password'
            value={password}
            onChange={this.handleChange}
            label='Password'
            required
          />
          <FormInput
            type='password'
            name='confirmPassword'
            value={confirmPassword}
            onChange={this.handleChange}
            label='Confirm password'
            required
          />
          <CustomButton type='submit'>SIGN UP</CustomButton>
        </form>
      </div>
    )
  }
}

export default SignUp;