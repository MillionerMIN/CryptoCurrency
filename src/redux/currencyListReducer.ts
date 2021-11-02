import { currencyAPI, CurrencyHistoryType, CurrencyType } from '../api/api';
import { Dispatch } from 'redux';

const initialCurrencyState = {
  currency: [] as CurrencyType[],
  chartHistory: [] as CurrencyHistoryType[],
  currentPage: 0,
  perPage: 10,
  totalCount: 100,
};

export const currencyListReducer = (
  state = initialCurrencyState,
  action: ActionsType
): InitialCurrencyStateType => {
  switch (action.type) {
    case 'SET-CURRENCY':
      return { ...state, currency: action.currencyList };
    case 'GET-HISTORY':
      return { ...state, chartHistory: action.chartHistory };
    case 'SET-CURRENT-PAGE':
      return { ...state, currentPage: action.currentPage }
    default:
      return state;
  }
};
//actions
export const setCurrencyAC = (currencyList: CurrencyType[]) =>
  ({ type: 'SET-CURRENCY', currencyList } as const);
export const getHistoryAC = (chartHistory: CurrencyHistoryType[]) =>
  ({ type: 'GET-HISTORY', chartHistory } as const);
export const setCurrentPageAC = (currentPage: number) => (
  { type: 'SET-CURRENT-PAGE', currentPage } as const)

//Thunks

export const setCurrencyListTC = (currentPage: number, perPage: number) => (dispatch: Dispatch<ActionsType>) => {
  dispatch(setCurrentPageAC(currentPage))
  currencyAPI.getCurrencyList(currentPage, perPage).then((res) => {
    dispatch(setCurrencyAC(res.data.data));
  });
};

export const setCurrencyHistoryTC = (id: string) => async(dispatch: Dispatch<ActionsType>) => {
  await currencyAPI.getCurrencyHistory(id)
    .then((res) => {
      dispatch(getHistoryAC(res.data.data));
    });
}

type InitialCurrencyStateType = typeof initialCurrencyState;

type ActionsType =
  | ReturnType<typeof setCurrencyAC>
  | ReturnType<typeof getHistoryAC>
  | ReturnType<typeof setCurrentPageAC>;
