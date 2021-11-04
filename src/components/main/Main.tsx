import { CurrencyType } from '../../api/api';
import { Item } from '../common/item/Item';
import { Paginate } from '../common/paginate/Paginate';
import Logo from '../../icons/digital-wallet.png';
import './main.scss';
import { Spinner } from '../common/spinner/Spinner';
import { useSelector } from 'react-redux';
import { AppRootStateType } from '../../redux/store';
import { setError, setLoading } from '../../redux/selectors';
import { MessageError } from '../common/error/messageError';

type MainPropsType = {
  data: CurrencyType[];
  totalCount: number;
  currentPage: number;
  perPage: number;
  onPageChange: (pageNumber: number) => void;
};

export const Main = (props: MainPropsType) => {
  const { data, totalCount, currentPage, perPage, onPageChange } = props;
  const loading = useSelector<AppRootStateType, boolean>(setLoading);
  const items = data.map((item) => <Item key={item.id} data={item} />);
  const error = useSelector<AppRootStateType, string>(setError);

  return (
    <section className="main">
      <div className="main__header">
        <div className="logo logo_center">
          <img className="logo__img" src={Logo} alt="Logo" />
        </div>
        <h1 className="title">Crypto-wallet</h1>
      </div>
      <div className="main__items">
        {loading && <Spinner />}
        {error ? <MessageError /> : items}
      </div>
      <Paginate
        totalCount={totalCount}
        pageSize={perPage}
        currentPage={currentPage}
        onPageChange={onPageChange}
      />
    </section>
  );
};
