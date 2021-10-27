import { currencyAPI, CurrencyType } from '../api/Api';
import { Dispatch } from 'redux'

const initialState = {
  currency: [] as CurrencyType[],
};

export const currencyListReducer = (
  state = initialState,
  action: ActionsType
): InitialStateType => {
  switch (action.type) {
    case 'SET-CURRENCY':
      return { ...state, currency: action.currencyList };

    default:
      return state;
  }
};
//actions
export const getCurrencyAC = (currencyList: CurrencyType[]) =>
  ({ type: 'SET-CURRENCY', currencyList } as const);

//Thunks

export const setCurrencyListTC = () => (dispatch: Dispatch<ActionsType>) => {
  currencyAPI.getCurrencyList()
    .then((res) => {
      dispatch(getCurrencyAC(res.data.data))
    })
}

type InitialStateType = typeof initialState;

type ActionsType = ReturnType<typeof getCurrencyAC>;
