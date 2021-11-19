import { useSelector } from 'react-redux';
import { setError } from '../../redux/selectors';
import { AppRootStateType } from '../../redux/store';
import { MessageError } from '../common/error/messageError';
import { Item } from '../common/item/item';
import { Paginate } from '../common/paginate/Paginate';
import { ContentPropsType } from '../content/Content';
import './currency.scss';

type CurrencyPropsType = {
  data: ContentPropsType;
};

export const Currency = (props: CurrencyPropsType) => {
  const { data, totalCount, currentPage, perPage, onPageChange } = props.data;
  const items = data.map((item) => <Item key={item.id} data={item} />);
  const error = useSelector<AppRootStateType, string>(setError);
  return (
    <div className="currency">
      <Paginate
        totalCount={totalCount}
        pageSize={perPage}
        currentPage={currentPage}
        onPageChange={onPageChange}
      />
      {error ? <MessageError /> : items}
    </div>
  );
};
