import HeaderLogo from '../../icons/digital-wallet.png';

import './header.scss';

const arrayItems = ['Homepage', 'Cost coins', 'About us'];

export const Header = () => {
  const item = arrayItems.map((item) => (
    <div className="header__item">{item}</div>
  ));
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__logo">
            <img className='logo__img' src={HeaderLogo} alt="header-logo" />
          </div>
          <div className="header__items">{item}</div>
          <div className="header__socials-link"></div>
        </div>
      </div>
    </header>
  );
};
