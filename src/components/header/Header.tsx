import { CurrencyType } from '../../api/Api';
import './Header.scss';

type HeaderPropsType = {
  data: CurrencyType[];
};

export const Header = (props: HeaderPropsType) => {
  const { data } = props;

  const newData = data.filter((item) => +item.rank <= 3);

  const el = newData.map((el) => {
    const fix = +el.priceUsd;

    return (
      <div key={el.id}>
        <span className="element">{el.name}</span>
        <span>{fix.toFixed(2)}</span>
      </div>
    );
  });

  return (
    <section className="header">
      <div className="money">{el}</div>
      <div className="profile">
        <h4>profile@gmail.com</h4>
        <div className="avatar">
          <img src="../../icons/money/bitcoin-btc-logo.svg" alt="" />
        </div>
        <div className="targets">134,32 USD +2,38 (1,80 %)</div>
      </div>
    </section>
  );
};
