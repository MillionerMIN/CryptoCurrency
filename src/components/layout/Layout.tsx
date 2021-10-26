import { Main } from '../main/Main';
import { Page } from '../page/Page';
import './Layout.scss';

export const Layout = () => {
  const money = [
    {
      id: 1,
      name: 'bitcoin',
      img: '../../icons/money/bitcoin-btc-logo.svg',
      desc: '63 000',
    },
    {
      id: 2,
      name: 'Ethereum',
      img: '../../icons/money/ethereum-eth-logo.svg',
      desc: '3 000',
    },
    {
      id: 3,
      name: 'Cardano',
      img: '../../icons/money/cardano-ada-logo.svg',
      desc: '1 000',
    },
    {
      id: 4,
      name: 'Binance Coin',
      img: '../../icons/money/binance-coin-bnb-logo.svg',
      desc: '100',
    },
    {
      id: 5,
      name: 'Tether',
      img: '../../icons/money/tether-usdt-logo.svg',
      desc: '1',
    },
  ];

  return (
    <div className="row layout">
      <div className="col-3 border">
        <Main data={money} />
      </div>
      <div className="col-9">
        <Page />
      </div>
    </div>
  );
};
