import { Link } from "react-router-dom"

export const RegisterScreen = () => {
  return (
    <>
      <h3 className='auth__title'>Register</h3>

      <form>
        <input type='text' placeholder='name' name='name' className='auth__input' autoComplete='off' />
        <input type='text' placeholder='email' name='email' className='auth__input' autoComplete='off' />
        <input type='password' placeholder='password' name='password' className='auth__input' />
        <input type='password' placeholder='confirm password' name='confirm_password' className='auth__input' />

        <button type='submit' className='auth__login-btn'>Register</button>

        <br />

        <Link to='/auth/login' className='link'>Already register?</Link>
      </form>
    </>
  )
}
