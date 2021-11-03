import { CurrencyType } from '../../api/api';
import { Item } from '../common/item/Item';

import { Paginate } from '../common/paginate/Paginate';
import Logo from '../../icons/digital-wallet.png';
import './main.scss';

type MainPropsType = {
  data: CurrencyType[];
  totalCount: number;
  currentPage: number;
  perPage: number;
  onPageChange: (pageNumber: number) => void;
};

export const Main = (props: MainPropsType) => {
  const { data, totalCount, currentPage, perPage, onPageChange } = props;

  const items = data.map((item) => <Item key={item.id} data={item} />);

  return (
    <section className="main">
      <div className="main__header">
        <div className="logo logo_center">
          <img className="logo__img" src={Logo} alt="Logo" />
        </div>
        <h1 className="title">Crypto-wallet</h1>
      </div>
      <div className="main__items">{items}</div>
      <Paginate
        totalCount={totalCount}
        pageSize={perPage}
        currentPage={currentPage}
        onPageChange={onPageChange}
      />
    </section>
  );
};
