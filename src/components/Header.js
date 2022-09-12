import { Link } from 'react-router-dom';
import logo from '../image/logo.svg';

function Header(props) {
  return (
    <header className="header">
      <img src={logo} alt="Лого" className="header__logo" />
      <div className="header__info">
        <p className='header__email'>{props.children}</p>
        <Link className='header__link' to={props.headerLink} onClick={props.onClick}>{props.buttonName}</Link>
      </div>
    </header>
  )
}

export default Header;