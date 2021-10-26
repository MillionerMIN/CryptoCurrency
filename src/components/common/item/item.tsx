import { Button } from 'react-bootstrap';
import { MoneyType } from '../../app/App';
import './Item.scss';

type ItemPropsType = {
  key: string;
  data: MoneyType;
};

export const Item = (props: ItemPropsType) => {
  const { img, name, desc } = props.data;
  return (
    <div className="item">
      <div className="item-image">
        <img src={img} alt="" />
      </div>
      <div className="text">{name}</div>
      <div className="cost">{desc}</div>
      <Button variant="outline-success">+</Button>
    </div>
  );
};
