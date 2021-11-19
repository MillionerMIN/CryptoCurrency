import { useSelector } from 'react-redux';
import { CurrencyType } from '../../api/api';
import { getTopCurrency, setLoading } from '../../redux/selectors';
import { AppRootStateType } from '../../redux/store';
import { Spinner } from '../common/spinner/Spinner';

import './topCurrency.scss';

export const TopCurrency = () => {
  const topCur = useSelector<AppRootStateType, CurrencyType[]>(getTopCurrency);
  const loading = useSelector<AppRootStateType, boolean>(setLoading);

  const el = topCur.map((el) => {
    const fix = (+el.priceUsd).toFixed(2);

    return (
      <div key={el.id} className="element">
        <span className="element__span element__span_text_color">
          {el.name}
        </span>
        <span className="element__span">{fix}</span>
      </div>
    );
  });

  return (
    <section className="info info_pd20 info_pd20-0">
      {loading && <Spinner />}
      <div className="info__title">TOP CURRENCY</div>
      {!loading && <div className="info__money">{el}</div>}
    </section>
  );
};
