import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { CurrencyHistoryType, CurrencyType } from '../../api/Api';
import {
  setCurrencyHistoryTC,
  setCurrencyListTC,
} from '../../redux/currencyList-reducer';
import { AppRootStateType } from '../../redux/store';
import { BarChart } from '../common/barChart/BarChart';
import ChevronLeft from '../../icons/parts/chevron-left.svg';

import './Information.scss';

export const Information = () => {
  const info = useSelector<AppRootStateType, CurrencyHistoryType[]>(
    (store) => store.currencyList.chartHistory
  );
  const [show, setShow] = useState(false);
  const { id } = useParams<{ id: string }>();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCurrencyListTC());
    dispatch(setCurrencyHistoryTC(id));
  }, [dispatch, id]);

  const onAddCurrency = () => {
    setShow(!show);
  };

  // const onChangeHandler = (numberCur: number) => {
  //   const newCur = {
  //     id: id,
  //     name: id,
  //     resultUsd: String(+numberCur * +priceUsd),
  //   };
  //   dispatch(addCrypto(newCur));
  //   setShow(!show);
  // };

  return (
    <div className="row information">
      <div className="information_panel">
        <div>
          <Link className="link" to={`/`}>
            <span>
              <img src={ChevronLeft} alt="React Logo" />
              Back
            </span>
          </Link>
        </div>
      </div>

      <div className="information_barChart">
        <BarChart infoData={info} id={id} />
      </div>
    </div>
  );
};
