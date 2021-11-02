import { AppRootStateType } from './store';


//selects CurrencyListReducer
export const getDataCurrentCrypto = (state: AppRootStateType) => {
  return state.currencyList.currency
}
export const getInfoCurrentCrypto = (state: AppRootStateType) => {
  return state.currencyList.chartHistory
}
export const getTotalCount = (state: AppRootStateType) => {
  return state.currencyList.totalCount
}
export const getCurrentPage = (state: AppRootStateType) => {
  return state.currencyList.currentPage
}
export const getPerPage = (state: AppRootStateType) => {
  return state.currencyList.perPage
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