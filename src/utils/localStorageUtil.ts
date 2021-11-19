import { CurrencyWalletType } from '../redux/walletReducer';

export const loadState = (key: string) => {
  try {
    const serializedState = localStorage.getItem(key);
    if (serializedState) {
      return JSON.parse(serializedState);
    }
  } catch (err) {
    return undefined;
  }
};

export const saveState = (state: StateLocalStorageType, key: string) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(key, serializedState);
  } catch {
    // ignore write errors
  }
};

type StateLocalStorageType = CurrencyWalletType[] | number;
