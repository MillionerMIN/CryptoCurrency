import { Button } from 'react-bootstrap';
import { CurrencyType } from '../../../api/Api';
import './Item.scss';

type ItemPropsType = {
  data: CurrencyType;
};

export const Item = (props: ItemPropsType) => {
  const { symbol, name, priceUsd } = props.data;
  const cost = +priceUsd;
  return (
    <div className="item">
      <div className="symbol">{symbol}</div>
      <div className="text">{name}</div>
      <div className="cost">{cost.toFixed(2)}</div>
      <Button variant="outline-success">+</Button>
    </div>
  );
};
