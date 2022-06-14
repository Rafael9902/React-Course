export const RegisterPage = () => {
  return (
    <section className="auth__container">
    <form className="auth__form">
      <h1 className='auth__form-title'>Register</h1>
      <input
        type="text"
        className="auth__form-input"
        placeholder="Name"
      />
      <input
        type="text"
        className="auth__form-input"
        placeholder="Email"
        autoComplete="off"
      />
      <input
        type="password"
        className="auth__form-input"
        placeholder="Password"
      />
      <input
        type="password"
        className="auth__form-input"
        placeholder="Verify Password"
      />
      <button type="submit" className="auth__form-button">
        Login
      </button>
    </form>
  </section>
  )
}
