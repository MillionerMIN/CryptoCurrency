import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CurrencyType } from '../../../api/api';
import {
  setCurrencyListTC,
  setCurrentPageAC,
  setTotalCounterTC,
} from '../../../redux/currencyListReducer';
import {
  getCurrentPage,
  getDataCurrentCrypto,
  getPerPage,
  getTotalCount,
} from '../../../redux/selectors';
import { AppRootStateType } from '../../../redux/store';
import { Content } from '../../Content/Content';
import { Main } from '../../main/Main';

import './basePage.scss';

export const BasePage = () => {
  const dispatch = useDispatch();
  const currencyList = useSelector<AppRootStateType, CurrencyType[]>(
    getDataCurrentCrypto
  );

  const totalCount = useSelector<AppRootStateType, number>(getTotalCount);
  const currentPage = useSelector<AppRootStateType, number>(getCurrentPage);
  const perPage = useSelector<AppRootStateType, number>(getPerPage);

  useEffect(() => {
    dispatch(setTotalCounterTC());
    dispatch(setCurrencyListTC(currentPage, perPage));
  }, [dispatch, currentPage, perPage]);

  const onPageChange = (pageNumber: number) => {
    pageNumber === 1 && dispatch(setCurrentPageAC(pageNumber - 1));
    pageNumber > 1 && dispatch(setCurrentPageAC(+(pageNumber - 1 + '1')));
  };

  return (
    <div className="base-page base-page_mr">
      <div className="row">
        <div className="col-4">
          <Main
            data={currencyList}
            totalCount={totalCount}
            currentPage={currentPage}
            perPage={perPage}
            onPageChange={onPageChange}
          />
        </div>
        <div className="col-8">
          <Content />
        </div>
      </div>
    </div>
  );
};
