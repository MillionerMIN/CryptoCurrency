import { MoneyType } from '../app/App';
import { Item } from '../common/item/item';
import './Main.scss';

type MainPropsType = {
  data: MoneyType[];
};

export const Main = (props: MainPropsType) => {
  const element = props.data.map((item) => (
    <Item key={item.name} data={item} />
  ));
  return (
    <section className="main">
      <div className="main-logo">
        <div className="logo">
          <img src="../../icons/digital-wallet.png" alt="Logo" />
        </div>
        <h1>Crypto-wallet</h1>
      </div>
      <div className="items">{element}</div>
    </section>
  );
};
