import { AppRootStateType } from './store';

//selectors appReducer
export const setLoading = (state: AppRootStateType) => {
  return state.app.isLoading
}
export const setError = (state: AppRootStateType) => {
  return state.app.error
}
// export const setActiveBtn = (state: AppRootStateType) => {
//   return state.app.activeBtn
// }


//selects CurrencyListReducer
export const getDataCurrentCrypto = (state: AppRootStateType) => {
  return state.currencyList.currency
}
export const getCurrentCrypto = (state: AppRootStateType) => {
  return state.currencyList.currentCur
}
export const getTopCurrency = (state: AppRootStateType) => {
  return state.currencyList.topCurrency
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
export const getCurrentsWallet = (state: AppRootStateType) => {
  return state.wallet.wallet
}
export const getSessionCostWallet = (state: AppRootStateType): number => {
  return state.wallet.sessionCostWallet
}
export const getPercentTransaction = (state: AppRootStateType): number => {
  return state.wallet.percentTransaction
}