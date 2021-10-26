import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Container } from 'react-bootstrap';
import { Main } from '../main/Main';
import { Page } from '../page/Page';
import { Layout } from '../layout/Layout';

export type MoneyType = {
  id: number;
  name: string;
  img: string;
  desc: string;
};

function App() {
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
    <div className="App">
      <Container>
        <Layout />
      </Container>
    </div>
  );
}

export default App;
