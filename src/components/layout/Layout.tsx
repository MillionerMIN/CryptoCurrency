import { useEffect, useState } from 'react';
import { currencyAPI, CurrencyType } from '../../api/Api';
import { Main } from '../main/Main';
import { Page } from '../page/Page';
// import JsonData from '../../data.json';
import './Layout.scss';

export const Layout = () => {
  const [currency, setCurrency] = useState<CurrencyType[]>([]);

  useEffect(() => {
    currencyAPI.getCurrencyList().then((res) => {
      setCurrency(res.data.data);
    });
  }, []);

  return (
    <div className="row layout">
      <div className="col-4 border">
        <Main data={currency} />
      </div>
      <div className="col-8">
        <Page data={currency} />
      </div>
    </div>
  );
};
