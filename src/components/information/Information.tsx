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
import { getCurrentCrypto, getInfoCurrentCrypto } from '../../redux/selectors';

import './Information.scss';
import { CurrencyHistoryType, CurrencyType } from '../../api/api';

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

  console.log(infoCurrentCrypto);

  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    dispatch(setCurrencyHistoryTC(id));
    dispatch(setCurrentCurrencyTC(id));
  }, [dispatch, id]);

  const table = (
    <table>
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
          <td className={+changePercent24Hr > 0 ? 'up' : 'down'}>
            {(+changePercent24Hr).toFixed(2) + '%'}
          </td>
          <td>{'$' + (+volumeUsd24Hr).toFixed(2)}</td>
          <td>{'$' + (+vwap24Hr).toFixed(2)}</td>
        </tr>
      </tbody>
    </table>
  );

  return (
    <section className="row information">
      <div className="information__panel">
        <div>
          <Link className="link" to={`/`}>
            <span>
              <img src={ChevronLeft} alt="React Logo" />
              Back
            </span>
          </Link>
        </div>
      </div>
      <div className="information__table">{table}</div>
      <div className="information__barChart">
        <BarChart infoData={infoCurrentCrypto} id={id} />
      </div>
    </section>
  );
};
