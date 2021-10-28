import { useState } from 'react';
import { CurrencyType } from '../../api/Api';
import { Item } from '../common/item/Item';

import { Paginate } from '../common/paginate/Paginate';
import './Main.scss';

type MainPropsType = {
  data: CurrencyType[];
};

export const Main = (props: MainPropsType) => {
  const { data } = props;

  const currencyTotalCount = data.length;
  const [currentPage, setCurrentPage] = useState<number>(1);
  const counterPerPage = 10;

  const lastCurrencyIndex = currentPage * counterPerPage;
  const firstCurrencyIndex = lastCurrencyIndex - counterPerPage;
  const currentElement = data.slice(firstCurrencyIndex, lastCurrencyIndex);

  const onPageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const element = currentElement.map((item) => (
    <Item key={item.id} data={item} />
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
      <Paginate
        totalCount={currencyTotalCount}
        pageSize={counterPerPage}
        currentPage={currentPage}
        onPageChange={onPageChange}
      />
    </section>
  );
};
