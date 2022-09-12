import { useState } from 'react';
import { withRouter } from 'react-router-dom';
import AuthForm from './AuthForm';

function Login(props) {

  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  function handleChangeEmail(event) {
    setEmail(event.target.value)
  }

  function handleChangePass(event) {
    setPass(event.target.value)
  }

  function handleSubmit(event) {
    event.preventDefault();
    props.onLoginUser({
      email,
      password: pass,
    })
    setEmail('');
    setPass('');
  }

  return (
    <AuthForm
      name='login'
      title='Вход'
      buttonName='Войти'
      headerLinkName='Регистрация'
      headerLinkUrl='/sign-up'
      onSubmit={handleSubmit}
    >
      <label htmlFor="input-email" className="popup__label">
        <input 
          type="text" 
          id="input-email" 
          className="auth__input" 
          placeholder="Email" 
          required 
          minLength="2" 
          maxLength="30" 
          name="email" 
          onChange={handleChangeEmail}
          value={email}
        />
        <span className="input-email-error popup__input-error"></span>
      </label>
      <label htmlFor="input-pass" className="popup__label">
        <input 
          type="password" 
          id="input-pass" 
          className="auth__input" 
          placeholder="Пароль" 
          required 
          name="pass" 
          onChange={handleChangePass}
          value={pass}
        />
        <span className="input-pass-error popup__input-error"></span>
      </label>
    </AuthForm>
  )
}

export default withRouter(Login);