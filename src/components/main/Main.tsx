import { CurrencyType } from '../../api/api';
import { Item } from '../common/item/Item';

import { Paginate } from '../common/paginate/Paginate';
import Logo from '../../icons/digital-wallet.png';
import './Main.scss';

type MainPropsType = {
  data: CurrencyType[];
  totalCount: number;
  currentPage: number;
  perPage: number;
  onPageChange: (pageNumber: number) => void;
};

export const Main = (props: MainPropsType) => {
  const { data, totalCount, currentPage, perPage, onPageChange } = props;

  const element = data.map((item) => <Item key={item.id} data={item} />);

  return (
    <section className="main">
      <div className="main-logo">
        <div className="logo">
          <img src={Logo} alt="Logo" />
        </div>
        <h1>Crypto-wallet</h1>
      </div>
      <div className="items">{element}</div>
      <Paginate
        totalCount={totalCount}
        pageSize={perPage}
        currentPage={currentPage}
        onPageChange={onPageChange}
      />
    </section>
  );
};
