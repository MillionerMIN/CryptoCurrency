import { AppRootStateType } from './store';

export const getCostWallet = (state: AppRootStateType): number => {
  return state.wallet.costWallet
}
export const getSessionCostWallet = (state: AppRootStateType): number => {
  return state.wallet.sessionCostWallet
}
export const getPercentTransaction = (state: AppRootStateType): number => {
  return state.wallet.percentTransaction
}