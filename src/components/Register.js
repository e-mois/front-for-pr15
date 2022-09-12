import { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import AuthForm from './AuthForm';

function Register(props) {

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
    props.onRegisterUser({
      email,
      password: pass,
    });
    if (props.auth) {
      props.onSuccess();
    }
  }

  return (
    <>
      <AuthForm
        name='login'
        title='Регистрация'
        buttonName='Зарегистрировать'
        headerLinkName='Войти'
        headerLinkUrl='/sign-in'
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
    
      <p className='auth__note'>Уже зарегистрированы? <Link to='/sign-in' className='auth__link'>Войти</Link></p>
    </>
  )
}

export default withRouter(Register);
