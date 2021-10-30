import { Button } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import { CurrencyType } from '../../../api/Api';
import { ModalWindow } from '../modal/ModalWindow';
import './Item.scss';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCrypto, removeCrypto } from '../../../redux/wallet-reducer';

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

  return (
    <div className="item">
      <Link onClick={onInfoHandler} className="link" to={`/assets/${id}`}>
        <div className="symbol">{symbol}</div>
        <div className="text">{name}</div>
        <div className="cost">{cost.toFixed(2)}</div>
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
