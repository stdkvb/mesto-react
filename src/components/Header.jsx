import logo from '../images/logo.svg';

const Header = props => {
    return(
        <header className="header">
          <img className="header__logo" src={logo}/>
        </header>
    )
}

export default Header;