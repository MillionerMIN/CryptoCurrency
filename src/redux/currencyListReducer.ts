import { Dispatch } from 'redux';
import { currencyAPI, CurrencyHistoryType, CurrencyType } from '../api/api';
import { errorHandler, setIsLoading } from './appReducer';

const initialCurrencyState = {
  currency: [] as CurrencyType[],
  currentCur: {} as CurrencyType,
  topCurrency: [] as CurrencyType[],
  chartHistory: [] as CurrencyHistoryType[],
  currentPage: 0,
  perPage: 10,
  totalCount: 0,
};

export const currencyListReducer = (
  state = initialCurrencyState,
  action: ActionsType
): InitialCurrencyStateType => {
  switch (action.type) {
    case 'SET-CURRENCY':
      return { ...state, currency: action.currencyList };
    case 'SET-CURRENT-CURRENCY':
      return { ...state, currentCur: action.currentCur };
    case 'SET-TOP-CURRENCY':
      return {
        ...state,
        topCurrency: action.topCurrency.filter((item) => +item.rank <= 3),
      };
    case 'GET-HISTORY':
      return { ...state, chartHistory: action.chartHistory };
    case 'SET-CURRENT-PAGE':
      return { ...state, currentPage: action.currentPage };
    case 'SET-TOTAL-COUNT':
      return { ...state, totalCount: action.totalCount };
    default:
      return state;
  }
};

//actions
export const setCurrencyAC = (currencyList: CurrencyType[]) =>
  ({ type: 'SET-CURRENCY', currencyList } as const);
export const setCurrentCurrencyAC = (currentCur: CurrencyType) =>
  ({ type: 'SET-CURRENT-CURRENCY', currentCur } as const);
export const setTopCurrency = (topCurrency: CurrencyType[]) =>
  ({ type: 'SET-TOP-CURRENCY', topCurrency } as const);
export const getHistoryAC = (chartHistory: CurrencyHistoryType[]) =>
  ({ type: 'GET-HISTORY', chartHistory } as const);
export const setCurrentPageAC = (currentPage: number) =>
  ({ type: 'SET-CURRENT-PAGE', currentPage } as const);
export const setTotalCountAC = (totalCount: number) =>
  ({ type: 'SET-TOTAL-COUNT', totalCount } as const);

//Thunks
export const setCurrencyListTC =
  (currentPage: number, perPage: number) =>
  async (dispatch: Dispatch<ActionsType>) => {
    dispatch(setIsLoading(true));
    try {
      dispatch(setCurrentPageAC(currentPage));
      const res = await currencyAPI.getCurrencyList(currentPage, perPage);
      dispatch(setCurrencyAC(res.data.data));
      dispatch(setIsLoading(false));
    } catch (error) {
      dispatch(errorHandler('error'));
      dispatch(setIsLoading(false));
    }
  };

export const setCurrentCurrencyTC =
  (id: string) => async (dispatch: Dispatch<ActionsType>) => {
    dispatch(setIsLoading(true));
    try {
      const res = await currencyAPI.getCurrentCurrency(id);
      dispatch(setCurrentCurrencyAC(res.data.data));
      dispatch(setIsLoading(false));
    } catch (error) {
      dispatch(setIsLoading(false));
      dispatch(errorHandler('error'));
    }
  };

export const setCurrencyHistoryTC =
  (id: string) => async (dispatch: Dispatch<ActionsType>) => {
    dispatch(setIsLoading(true));
    try {
      const res = await currencyAPI.getCurrencyHistory(id);
      dispatch(getHistoryAC(res.data.data));
      dispatch(setIsLoading(false));
    } catch (error) {
      dispatch(setIsLoading(false));
      dispatch(errorHandler('error'));
    }
  };

export const setTotalCounterTC =
  () => async (dispatch: Dispatch<ActionsType>) => {
    dispatch(setIsLoading(true));
    try {
      const res = await currencyAPI.getStillCurrencyList();
      dispatch(setTotalCountAC(res.data.data.length));
      dispatch(setTopCurrency(res.data.data));
      dispatch(setIsLoading(false));
    } catch (error) {
      dispatch(setIsLoading(false));
      dispatch(errorHandler('error'));
    }
  };

type InitialCurrencyStateType = typeof initialCurrencyState;

type ActionsType =
  | ReturnType<typeof setCurrencyAC>
  | ReturnType<typeof setCurrentCurrencyAC>
  | ReturnType<typeof setTopCurrency>
  | ReturnType<typeof getHistoryAC>
  | ReturnType<typeof setCurrentPageAC>
  | ReturnType<typeof setTotalCountAC>
  | ReturnType<typeof errorHandler>
  | ReturnType<typeof setIsLoading>;
