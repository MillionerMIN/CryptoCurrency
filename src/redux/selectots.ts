import { AppRootStateType } from './store';

export const getCostWallet = (state: AppRootStateType): string => {
  return state.wallet.costWallet
}