import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { CurrencyHistoryType } from '../../api/Api';
import { setCurrencyHistoryTC } from '../../redux/currencyList-reducer';
import { AppRootStateType } from '../../redux/store';
import { BarChart } from '../common/barChart/BarChart';
import { ModalWindow } from '../common/modal/ModalWindow';
import ChevronLeft from '../../icons/parts/chevron-left.svg';

import './Information.scss';

export const Information = () => {
  const [show, setShow] = useState(false);
  const { id } = useParams<{ id: string }>();
  const info = useSelector<AppRootStateType, CurrencyHistoryType[]>(
    (store) => store.currencyList.chartHistory
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCurrencyHistoryTC(id));
  }, [dispatch, id]);

  const onAddCurrency = () => {
    setShow(!show);
  };

  const onHandleClose = () => {
    setShow(!show);
  };

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
        <Button variant="outline-success" onClick={onAddCurrency}>
          add
        </Button>
        {show && <ModalWindow handleClose={onHandleClose} />}
      </div>

      <div className="information_barChart">
        <BarChart infoData={info} id={id} />
      </div>
    </div>
  );
};
