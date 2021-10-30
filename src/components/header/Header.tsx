import { useSelector } from 'react-redux';
import { CurrencyType } from '../../api/Api';
import Ava from '../../icons/person/avatar.svg';
import { getCostWallet } from '../../redux/selectots';
import { AppRootStateType } from '../../redux/store';

import './Header.scss';

type HeaderPropsType = {
  data: CurrencyType[];
};

export const Header = (props: HeaderPropsType) => {
  const { data } = props;
  const costWallet = useSelector<AppRootStateType, string>(getCostWallet);
  

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
      <div className="money">{el}</div>
      <div className="profile">
        <span>profile@gmail.com</span>
        <div className="avatar">
          <img src={Ava} alt="ava" />
        </div>
        <div className="targets">{costWallet}USD +2,38 (1,80 %)</div>
      </div>
    </section>
  );
};
