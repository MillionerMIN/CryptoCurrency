import FooterLogo from '../../icons/digital-wallet.png';
import { Socials } from '../socials/Socials';
import './footer.scss';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <img className="logo__img" src={FooterLogo} alt="footer-logo" />
          <p className="footer__text">© 2021 CRYPTO-WALLET</p>
          <Socials />
        </div>
      </div>
    </footer>
  );
};
