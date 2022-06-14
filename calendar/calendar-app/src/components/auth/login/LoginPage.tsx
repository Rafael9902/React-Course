export const LoginPage = () => {
  return (
    <section className="auth__container">
      <form className="auth__form">
        <h1 className='auth__form-title'>Login</h1>
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
        <button type="submit" className="auth__form-button">
          Login
        </button>
      </form>
    </section>
  );
};
