import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { CurrencyHistoryType, CurrencyType } from '../../api/api';
import { setCurrencyHistoryTC } from '../../redux/currencyListReducer';
import { AppRootStateType } from '../../redux/store';
import { BarChart } from '../common/barChart/BarChart';
import ChevronLeft from '../../icons/parts/chevron-left.svg';
import {
  getDataCurrentCrypto,
  getInfoCurrentCrypto,
} from '../../redux/selectors';

import './Information.scss';

export const Information = () => {
  const infoCurrentCrypto = useSelector<
    AppRootStateType,
    CurrencyHistoryType[]
  >(getInfoCurrentCrypto);
  const dataCurrentCrypto = useSelector<AppRootStateType, CurrencyType[]>(
    getDataCurrentCrypto
  );

  console.log(dataCurrentCrypto);

  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCurrencyHistoryTC(id));
  }, [dispatch, id]);

  const table = dataCurrentCrypto.map(
    (el) =>
      el.id === id && (
        <table key={el.id}>
          <tbody>
            <tr>
              <th>Rank</th>
              <th>Symbol</th>
              <th>Price Usd</th>
              <th>Market Cap Usd</th>
              <th>Supply</th>
              <th>Change Percent 24Hr</th>
              <th>Volume usd 24Hr</th>
              <th>Max Supply</th>
            </tr>
            <tr>
              <td>{el.rank}</td>
              <td>{el.symbol}</td>
              <td>{(+el.priceUsd).toFixed(2)}</td>
              <td>{(+el.marketCapUsd).toFixed(2)}</td>
              <td>{(+el.supply).toFixed(2)}</td>
              <td className={+el.changePercent24Hr > 0 ? 'up' : 'down'}>
                {(+el.changePercent24Hr).toFixed(2)}
              </td>
              <td>{(+el.volumeUsd24Hr).toFixed(2)}</td>
              <td>{(+el.maxSupply).toFixed(2)}</td>
            </tr>
          </tbody>
        </table>
      )
  );

  return (
    <div className="row information">
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
    </div>
  );
};
