const initialWalletState = {
  wallet: [] as CurrencyWalletType[],
  costWallet: 0,
  sessionCostWallet: 0,
  percentTransaction: 0,
}

export const walletReducer = (state: InitialWalletStateType = initialWalletState, action: ActionsType): InitialWalletStateType => {

  switch (action.type) {
    case 'ADD-CRYPTO': {
      const addAsset = state.wallet.find(item => item.id === action.amount.id);
      if (addAsset) {
        state.wallet.map(item => {
          if (item.id === action.amount.id) {
            item.resultUsd = item.resultUsd + action.amount.resultUsd;
            item.count = item.count + action.amount.count;
          }
        })
        const percentTransaction = +(action.amount.resultUsd * 100 / state.costWallet).toFixed(3)
        return { ...state, wallet: [...state.wallet], costWallet: state.costWallet + action.amount.resultUsd, sessionCostWallet: action.amount.resultUsd, percentTransaction: percentTransaction }
      }
      return { ...state, wallet: [...state.wallet, action.amount], costWallet: state.costWallet + action.amount.resultUsd, sessionCostWallet: action.amount.resultUsd }
    }

    case 'REMOVE-CRYPTO': {
      const removeAsset = state.wallet.find(item => item.id === action.amount.id);
      if (removeAsset) {
        state.wallet.map(item => {
          if (item.id === action.amount.id) {
            item.resultUsd = item.resultUsd < action.amount.resultUsd ? item.resultUsd - item.resultUsd : item.resultUsd - action.amount.resultUsd
            item.count = item.count < action.amount.count ? item.count - item.count : item.count - action.amount.count;
          }
        })
        return { ...state, wallet: [...state.wallet], costWallet: state.costWallet < action.amount.resultUsd ? state.costWallet - state.costWallet : state.costWallet - action.amount.resultUsd, sessionCostWallet: action.amount.resultUsd }
      }
      return { ...state, wallet: [...state.wallet, action.amount], costWallet: state.costWallet < action.amount.resultUsd ? state.costWallet - state.costWallet : state.costWallet - action.amount.resultUsd, sessionCostWallet: action.amount.resultUsd }
    }
    case 'COST-WALLET': {
      return {
        ...state
      }
    }
    default:
      return state;
  }
}

//action
export const addCrypto = (amount: CurrencyWalletType) => ({ type: 'ADD-CRYPTO', amount } as const)
export const removeCrypto = (amount: CurrencyWalletType) => ({ type: 'REMOVE-CRYPTO', amount } as const)
export const costWallet = (sum: string) => ({ type: 'COST-WALLET', sum } as const)


//Type
export type CurrencyWalletType = {
  id: string
  count: number
  resultUsd: number
}
export type InitialWalletStateType = typeof initialWalletState

type ActionsType = ReturnType<typeof addCrypto> | ReturnType<typeof removeCrypto> | ReturnType<typeof costWallet> 