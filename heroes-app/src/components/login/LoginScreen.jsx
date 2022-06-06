import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../auth/authContext';
import { authReducer } from '../auth/authReducer';
import { types } from '../types/types';

export const LoginScreen = () => {
  const navigate = useNavigate();
  const { dispatch } = useContext(AuthContext);

  const handleLogin = () => {
    const action = {
      type: types.login,
      payload: {name: 'rafael'}
    }

    dispatch(action)
    
    navigate('/', {
      replace: true
    });
  }

  return (
    <section className='container mt-5'>
      <form>
        <h1>Login Screen</h1>
        <hr />
        <input type='text' name='name'/>
        <button className='btn btn-primary' onClick={handleLogin}>Login</button>
      </form>
    </section>
  )
}
 