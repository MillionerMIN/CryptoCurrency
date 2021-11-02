import { applyMiddleware, combineReducers, createStore } from "redux";
import thunkMiddleware from 'redux-thunk'
import { saveState } from "../utils/localStorageUtil";
import { currencyListReducer } from "./currencyListReducer";
import { walletReducer } from './walletReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

export const rootReducer = combineReducers({
  currencyList: currencyListReducer,
  wallet: walletReducer,
});

let preloadedState;
const persistedWalletString = localStorage.getItem('wallet')
const persistedCostWalletString = localStorage.getItem('costWallet');
if (persistedWalletString && persistedCostWalletString) {
  preloadedState = {
    wallet: {
      wallet: JSON.parse(persistedWalletString),
      costWallet: JSON.parse(persistedCostWalletString),
      sessionCostWallet: 0,
      percentTransaction: 0,
    }
  }
}

export const store = createStore(rootReducer, preloadedState, composeWithDevTools(applyMiddleware(thunkMiddleware)))

store.subscribe(() => {
  saveState(store.getState().wallet.wallet, 'wallet')
  saveState(store.getState().wallet.costWallet, 'costWallet')
})

export type AppRootStateType = ReturnType<typeof rootReducer>

// @ts-ignore
window.store = store;