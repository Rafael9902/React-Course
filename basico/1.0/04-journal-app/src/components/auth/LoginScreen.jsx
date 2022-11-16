import { useDispatch } from "react-redux";
import { Link } from "react-router-dom"
import { login } from "../../actions/auth";
import { useForm } from "../../hooks/useForm"

export const LoginScreen = () => {
  const [ formValue, handleInputChange, reset ] = useForm({
    email: '',
    password: ''
  });

  const { email, password } = formValue; 
  const dispatch = useDispatch()

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(login(12345, 'Rafael'));
  }

  return (
    <>
      <h3 className='auth__title'>Login</h3>

      <form onSubmit={ handleLogin }>
        <input type='text' placeholder='email' name='email' className='auth__input' autoComplete='off' value={email} onChange={ handleInputChange }/>
        <input type='password' placeholder='password' name='password' className='auth__input' value={password} onChange={ handleInputChange }/>
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
