import { applyMiddleware, combineReducers, createStore } from "redux";
import thunkMiddleware from 'redux-thunk'
import { loadState, saveState } from "../utils/localStorageUtil";
import { currencyListReducer } from "./currencyList-reducer";
import { walletReducer } from "./wallet-reducer";

export const rootReducer = combineReducers({
  currencyList: currencyListReducer,
  wallet: walletReducer,
});


const persistedState = loadState();


export const store = createStore(rootReducer, persistedState, applyMiddleware(thunkMiddleware))

store.subscribe(() => {
  saveState({
    wallet: store.getState().wallet
  })
})

export type AppRootStateType = ReturnType<typeof rootReducer>

// @ts-ignore
window.store = store;