import { applyMiddleware, combineReducers, createStore } from "redux";
import thunkMiddleware from 'redux-thunk'
import { saveState } from "../utils/localStorageUtil";
import { currencyListReducer } from "./currencyListReducer";
import { walletReducer } from './walletReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import { appReducer } from "./appReducer";
import { CurrencyHistoryType, CurrencyType } from "../api/api";

export const rootReducer = combineReducers({
  app: appReducer,
  currencyList: currencyListReducer,
  wallet: walletReducer,
});

let preloadedState;
const persistedWalletString = localStorage.getItem('wallet')
const persistedCostWalletString = localStorage.getItem('costWallet');
const persistedCurrentPageString = localStorage.getItem('currentPage')
if (persistedWalletString && persistedCostWalletString && persistedCurrentPageString) {
  preloadedState = {
    wallet: {
      wallet: JSON.parse(persistedWalletString),
      costWallet: JSON.parse(persistedCostWalletString),
      sessionCostWallet: 0,
      percentTransaction: 0,
    },
    currencyList: {
      currency: [] as CurrencyType[],
      currentCur: {} as CurrencyType,
      topCurrency: [] as CurrencyType[],
      chartHistory: [] as CurrencyHistoryType[],
      currentPage: JSON.parse(persistedCurrentPageString),
      perPage: 10,
      totalCount: 0,
    },
  }
}

export const store = createStore(rootReducer, preloadedState, composeWithDevTools(applyMiddleware(thunkMiddleware)))

store.subscribe(() => {
  saveState(store.getState().wallet.wallet, 'wallet')
  saveState(store.getState().wallet.costWallet, 'costWallet')
  saveState(store.getState().currencyList.currentPage, 'currentPage')
})

export type AppRootStateType = ReturnType<typeof rootReducer>

// @ts-ignore
window.store = store;