import { useSelector } from 'react-redux';
import { CurrencyType } from '../../api/api';
import Ava from '../../icons/person/avatar.svg';
import {
  getCostWallet,
  getPercentTransaction,
  getSessionCostWallet,
  getTopCurrency,
} from '../../redux/selectors';
import { AppRootStateType } from '../../redux/store';

import './header.scss';

export const Header = () => {
  const costWallet = useSelector<AppRootStateType, number>(getCostWallet);
  const sessionCostWallet = useSelector<AppRootStateType, number>(
    getSessionCostWallet
  );
  // percent transaction from cost wallet
  const percent = useSelector<AppRootStateType, number>(getPercentTransaction);
  const topCur = useSelector<AppRootStateType, CurrencyType[]>(getTopCurrency);

  const el = topCur.map((el) => {
    const fix = (+el.priceUsd).toFixed(2);

    return (
      <div key={el.id} className="element">
        <span className="element__span element__span_text_color">
          {el.name}
        </span>
        <span className="element__span">{fix}</span>
      </div>
    );
  });

  return (
    <section className="header header_pd20">
      <div className="header__money">{el}</div>
      <div className="profile">
        <span className="profile__name">profile@gmail.com</span>
        <div className="profile__avatar">
          <img src={Ava} alt="ava" />
        </div>
        <div className="profile__targets">
          <span>{costWallet} USD</span>
          <span>{sessionCostWallet} USD</span>
          <span>{percent} %</span>
        </div>
      </div>
    </section>
  );
};
