import { useSelector } from 'react-redux';
import { CurrencyType } from '../../api/Api';
import Ava from '../../icons/person/avatar.svg';
import { getCostWallet, getSessionCostWallet } from '../../redux/selectots';
import { AppRootStateType } from '../../redux/store';

import './Header.scss';

type HeaderPropsType = {
  data: CurrencyType[];
};

export const Header = (props: HeaderPropsType) => {
  const { data } = props;
  const costWallet = useSelector<AppRootStateType, number>(getCostWallet);
  // const cost = window.localStorage.wallet.costWallet;
  const sessionCostWallet = useSelector<AppRootStateType, number>(
    getSessionCostWallet
  );
  // console.log(cost);

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
        <div className="avatar">
          <img src={Ava} alt="ava" />
        </div>
        <div className="targets">
          {costWallet}USD +{sessionCostWallet} (1,80 %)
        </div>
      </div>
    </section>
  );
};
