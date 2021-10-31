import { useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CurrencyType } from '../../api/Api';
import { setCurrencyListTC } from '../../redux/currencyList-reducer';
import { AppRootStateType } from '../../redux/store';
import { Main } from '../main/Main';
import { Page } from '../page/Page';
import './Layout.scss';

export const Layout = () => {
  const currencyList = useSelector<AppRootStateType, CurrencyType[]>(
    (store) => store.currencyList.currency
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCurrencyListTC());

  }, [dispatch]);

  return (
    <div className="row layout">
      <div className="col-4">
        <Main data={currencyList} />
      </div>
      <div className="col-8">
        <Page data={currencyList} />
      </div>
    </div>
  );
};
