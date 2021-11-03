import { Button } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import { CurrencyType } from '../../../api/api';
import { ModalWindow } from '../modal/ModalWindow';
import './item.scss';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCrypto, removeCrypto } from '../../../redux/walletReducer';

type ItemPropsType = {
  data: CurrencyType;
};

export const Item = (props: ItemPropsType) => {
  const { symbol, name, priceUsd, id } = props.data;
  const [show, setShow] = useState(false);
  const cost = +priceUsd;
  const history = useHistory();
  const onInfoHandler = () => {
    return history.push(`/assets/${id}`);
  };
  const onShowCloseModal = () => {
    setShow(!show);
  };

  const dispatch = useDispatch();
  //Handler Buy and Sale currency
  const onChangeHandler = (numberCur: number, value: string) => {
    const newCur = {
      id: id,
      count: numberCur,
      resultUsd: numberCur * +priceUsd,
    };
    if (value === 'buy') {
      dispatch(addCrypto(newCur));
      setShow(!show);
    }
    if (value === 'sale') {
      dispatch(removeCrypto(newCur));
      setShow(!show);
    }
  };
  //Function is check even number
  function isEven(value: number) {
    return !(value % 2);
  }
  const clazz = isEven(+props.data.rank) ? 'item_bg' : '';

  return (
    <div className={`item item_mb item_pd ${clazz}`}>
      <Link onClick={onInfoHandler} className="item__link" to={`/assets/${id}`}>
        <div className="item__symbol">{symbol}</div>
        <div className="item__text">{name}</div>
        <div className="item__cost">{cost.toFixed(2)}</div>
      </Link>
      <Button variant="outline-success" onClick={onShowCloseModal}>
        +
      </Button>
      {show && (
        <ModalWindow
          handleClose={onShowCloseModal}
          changeHandler={onChangeHandler}
          data={props.data}
        />
      )}
    </div>
  );
};
