import { AppRootStateType } from './store';


//selects CurrencyList-reducer
export const getDataCurrentCrypto = (state: AppRootStateType) => {
  return state.currencyList.currency
}
export const getInfoCurrentCrypto = (state: AppRootStateType) => {
  return state.currencyList.chartHistory
}


//selects Wallet-reducer
export const getCostWallet = (state: AppRootStateType): number => {
  return state.wallet.costWallet
}
export const getSessionCostWallet = (state: AppRootStateType): number => {
  return state.wallet.sessionCostWallet
}
export const getPercentTransaction = (state: AppRootStateType): number => {
  return state.wallet.percentTransaction
}