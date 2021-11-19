import { useState } from 'react';
import { Link } from 'react-router-dom';
import HeaderLogo from '../../icons/digital-wallet.png';
import { Socials } from '../socials/Socials';
import './mobHeader.scss';

const arrayItems = [
  { name: 'Homepage', hash: '/' },
  { name: 'Cost wallet', hash: '/costwallet' },
  { name: 'About us', hash: '/about' },
];

export const MobHeader = () => {
  const [click, setClick] = useState<boolean>(false);
  const handleClick = () => {
    setClick(!click);
  };

  const clazz = click
    ? 'header header_position header_open'
    : 'header header_position';

  const item = arrayItems.map((item) => (
    <Link
      className="header__link"
      key={item.name}
      to={item.hash}
      onClick={handleClick}
    >
      <div className="header__item">{item.name}</div>
    </Link>
  ));
  return (
    <>
      {/* {MOB-HEADER} */}
      <div className="mob-header mob-header_position">
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
