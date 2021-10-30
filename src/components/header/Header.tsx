import { useSelector } from 'react-redux';
import { CurrencyType } from '../../api/Api';
import Ava from '../../icons/person/avatar.svg';
import {
  getCostWallet,
  getPercentTransaction,
  getSessionCostWallet,
} from '../../redux/selectots';
import { AppRootStateType } from '../../redux/store';

import './Header.scss';

type HeaderPropsType = {
  data: CurrencyType[];
};

export const Header = (props: HeaderPropsType) => {
  const { data } = props;
  const costWallet = useSelector<AppRootStateType, number>(getCostWallet);
  const sessionCostWallet = useSelector<AppRootStateType, number>(
    getSessionCostWallet
  );
  // percent transaction from cost wallet
  const percent = useSelector<AppRootStateType, number>(getPercentTransaction);

  const newData = data.filter((item) => +item.rank <= 3);

  const el = newData.map((el) => {
    const fix = (+el.priceUsd).toFixed(2);

    return (
      <div key={el.id}>
        <span className="element">{el.name}</span>
        <span>{fix}</span>
      </div>
    );
  });

  return (
    <section className="header">
      <div className="header__money">{el}</div>
      <div className="header__profile">
        <span>profile@gmail.com</span>
        <div className="header__profile__avatar">
          <img src={Ava} alt="ava" />
        </div>
        <div className="header__profile__targets">
          <span>{costWallet} USD</span>
          <span>{sessionCostWallet} USD</span>
          <span>{percent} %</span>
        </div>
      </div>
    </section>
  );
};
