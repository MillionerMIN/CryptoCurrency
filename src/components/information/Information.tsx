import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import {
  setCurrencyHistoryTC,
  setCurrentCurrencyTC,
} from '../../redux/currencyListReducer';
import { AppRootStateType } from '../../redux/store';
import { BarChart } from '../common/barChart/BarChart';
import ChevronLeft from '../../icons/parts/chevron-left.svg';
import {
  getCurrentCrypto,
  getInfoCurrentCrypto,
  setError,
  setLoading,
} from '../../redux/selectors';
import { CurrencyHistoryType, CurrencyType } from '../../api/api';
import './Information.scss';
import { IsLoading } from '../common/isLoading/IsLoading';
import { ModalError } from '../common/error/ModalError';

export const Information = () => {
  const dispatch = useDispatch();
  const {
    rank,
    symbol,
    priceUsd,
    marketCapUsd,
    supply,
    changePercent24Hr,
    volumeUsd24Hr,
    vwap24Hr,
  } = useSelector<AppRootStateType, CurrencyType>(getCurrentCrypto);

  const infoCurrentCrypto = useSelector<
    AppRootStateType,
    CurrencyHistoryType[]
  >(getInfoCurrentCrypto);

  const { id } = useParams<{ id: string }>();
  const loading = useSelector<AppRootStateType, boolean>(setLoading);
  const error = useSelector<AppRootStateType, string>(setError);

  useEffect(() => {
    dispatch(setCurrencyHistoryTC(id));
    dispatch(setCurrentCurrencyTC(id));
  }, [dispatch, id]);

  const table = (
    <table className="table">
      <thead>
        <tr>
          <th>Rank</th>
          <th>Symbol</th>
          <th>Price</th>
          <th>Market Cap</th>
          <th>Supply</th>
          <th>Change 24Hr</th>
          <th>Volume 24Hr</th>
          <th>VWAP24Hr</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{rank}</td>
          <td>{symbol}</td>
          <td>{'$' + (+priceUsd).toFixed(2)}</td>
          <td>{'$' + (+marketCapUsd).toFixed(2)}</td>
          <td>{(+supply).toFixed(2) + 'm'}</td>
          <td
            className={
              +changePercent24Hr > 0 ? 'table__text_up' : 'table__text_down'
            }
          >
            {(+changePercent24Hr).toFixed(2) + '%'}
          </td>
          <td>{'$' + (+volumeUsd24Hr).toFixed(2)}</td>
          <td>{'$' + (+vwap24Hr).toFixed(2)}</td>
        </tr>
      </tbody>
    </table>
  );

  return (
    <section className="information information_mr20 information_pd15">
      {loading && <IsLoading />}
      <div className="row">
        <div className="information__panel">
          <div>
            <Link className="information__link" to={`/`}>
              <span>
                <img src={ChevronLeft} alt="React Logo" />
                Back
              </span>
            </Link>
          </div>
        </div>
        {error === 'error' && <ModalError />}
        {table}
        <div className="information__barChart">
          <BarChart infoData={infoCurrentCrypto} id={id} />
        </div>
      </div>
    </section>
  );
};
