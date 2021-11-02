import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { setCurrencyHistoryTC } from '../../redux/currencyListReducer';
import { AppRootStateType } from '../../redux/store';
import { BarChart } from '../common/barChart/BarChart';
import ChevronLeft from '../../icons/parts/chevron-left.svg';
import { getCurrentCrypto, getInfoCurrentCrypto } from '../../redux/selectors';

import './Information.scss';
import { CurrencyHistoryType, CurrencyType } from '../../api/api';

export const Information = () => {
  const dispatch = useDispatch();
  const currentCrypto = useSelector<AppRootStateType, CurrencyType>(
    getCurrentCrypto
  );
  const {
    rank,
    symbol,
    priceUsd,
    marketCapUsd,
    supply,
    changePercent24Hr,
    volumeUsd24Hr,
    maxSupply,
  } = currentCrypto;

  const infoCurrentCrypto = useSelector<
    AppRootStateType,
    CurrencyHistoryType[]
  >(getInfoCurrentCrypto);

  console.log(currentCrypto);
  console.log(infoCurrentCrypto);
  console.log(currentCrypto.changePercent24Hr);

  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    dispatch(setCurrencyHistoryTC(id));
  }, [dispatch, id]);

  const table = (
    <table>
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
          <td>{currentCrypto.rank}</td>
          <td>{currentCrypto.symbol}</td>
          <td>{(+currentCrypto.priceUsd).toFixed(2)}</td>
          <td>{(+currentCrypto.marketCapUsd).toFixed(2)}</td>
          <td>{(+currentCrypto.supply).toFixed(2)}</td>
          <td className={+currentCrypto.changePercent24Hr > 0 ? 'up' : 'down'}>
            {(+currentCrypto.changePercent24Hr).toFixed(2)}
          </td>
          <td>{(+currentCrypto.volumeUsd24Hr).toFixed(2)}</td>
          <td>{(+currentCrypto.maxSupply).toFixed(2)}</td>
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

// const TableInformation = (props) => {
//   const { rank, symbol, priceUsd } = props;
//   return (
//     <>
//       <table>
//         <tbody>
//           <tr>
//             <th>Rank</th>
//             <th>Symbol</th>
//             <th>Price Usd</th>
//             <th>Market Cap Usd</th>
//             <th>Supply</th>
//             <th>Change Percent 24Hr</th>
//             <th>Volume usd 24Hr</th>
//             <th>Max Supply</th>
//           </tr>
//           <tr>
//             <td>{currentCrypto.rank}</td>
//             <td>{currentCrypto.symbol}</td>
//             <td>{(+currentCrypto.priceUsd).toFixed(2)}</td>
//             <td>{(+currentCrypto.marketCapUsd).toFixed(2)}</td>
//             <td>{(+currentCrypto.supply).toFixed(2)}</td>
//             <td
//               className={+currentCrypto.changePercent24Hr > 0 ? 'up' : 'down'}
//             >
//               {(+currentCrypto.changePercent24Hr).toFixed(2)}
//             </td>
//             <td>{(+currentCrypto.volumeUsd24Hr).toFixed(2)}</td>
//             <td>{(+currentCrypto.maxSupply).toFixed(2)}</td>
//           </tr>
//         </tbody>
//       </table>
//     </>
//   );
// }
