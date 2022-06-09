import { Link } from "react-router-dom"

export const LoginScreen = () => {
  return (
    <>
      <h3 className='auth__title'>Login</h3>

      <form>
        <input type='text' placeholder='email' name='email' className='auth__input' autoComplete='off' />
        <input type='password' placeholder='password' name='password' className='auth__input' />
        <button type='submit' className='auth__login-btn'>Login</button>

        <br />

        <section>
          <p className='auth__p-social'>Login with social networks</p>
          <div className="google-btn">
            <div className="google-icon-wrapper">
              <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
            </div>
            <button className="btn-text">
              Sign in with google
            </button>
          </div>
        </section>

        <Link to='/auth/register' className='link'>Create new account</Link>

      </form>
    </>
  )
}
