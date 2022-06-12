import './LoginScreen.scss';

export const LoginScreen = () => {
  return (
    <section className='auth__container'>
      <form className='auth__form'>
        <input type='text' className='auth__form-input' placeholder='Email'/>
        <input type='password' className='auth__form-input' placeholder='Password'/>
        <button type='submit' className='auth__form-button'>Login</button>
      </form>
    </section>
  )
}
