import { currencyAPI, CurrencyHistoryType, CurrencyType } from '../api/Api';
import { Dispatch } from 'redux';

const initialCurrencyState = {
  currency: [] as CurrencyType[],
  chartHistory: [] as CurrencyHistoryType[],
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

    default:
      return state;
  } 
};
//actions
export const getCurrencyAC = (currencyList: CurrencyType[]) =>
  ({ type: 'SET-CURRENCY', currencyList } as const);
export const getHistoryAC = (chartHistory: CurrencyHistoryType[]) =>
  ({ type: 'GET-HISTORY', chartHistory } as const);

//Thunks

export const setCurrencyListTC = () => (dispatch: Dispatch<ActionsType>) => {
  currencyAPI.getCurrencyList().then((res) => {
    dispatch(getCurrencyAC(res.data.data));
  });
};

export const setCurrencyHistoryTC = (id: string) => (dispatch: Dispatch<ActionsType>) => {
  currencyAPI.getCurrencyHistory(id)
    .then((res) => {
      dispatch(getHistoryAC(res.data.data));
    });
}

type InitialCurrencyStateType = typeof initialCurrencyState;

type ActionsType =
  | ReturnType<typeof getCurrencyAC>
  | ReturnType<typeof getHistoryAC>;
