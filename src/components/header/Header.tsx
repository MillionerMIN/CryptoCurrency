import { useState } from 'react';
import { Link } from 'react-router-dom';
import HeaderLogo from '../../icons/digital-wallet.png';
import { Socials } from '../socials/Socials';

import './header.scss';

const arrayItems = [
  { name: 'Homepage', hash: '/' },
  { name: 'Cost coins', hash: '/costwallet' },
  { name: 'About us', hash: '/about' },
];

export const Header = () => {
  const [click, setClick] = useState<boolean>(false);
  const handleClick = () => {
    setClick(!click);
  };

  const clazz = click ? 'header header_open' : 'header';

  const item = arrayItems.map((item) => (
    <Link className="header__link" key={item.name} to={item.hash}>
      <div className="header__item">{item.name}</div>
    </Link>
  ));
  return (
    <>
      {/* {MOB-HEADER} */}
      <div className="mob-header">
        <button className="mob-header__menu" onClick={handleClick}>
          <div className={click ? 'mob-header__humbugger_active' : ''}>
            <span className="mob-header__line"></span>
            <span className="mob-header__line"></span>
            <span className="mob-header__line"></span>
          </div>
        </button>
      </div>
      {/* HEADER */}
      <header className={clazz}>
        <div className="container">
          <div className="header__wrapper">
            <div className="header__logo">
              <img className="header__img" src={HeaderLogo} alt="header-logo" />
            </div>
            <div className="header__items">{item}</div>
            <Socials />
          </div>
        </div>
      </header>
    </>
  );
};
