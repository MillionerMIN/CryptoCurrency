const initialWalletState = {
  wallet: [] as CurrencyWalletType[],
  costWallet: ''
}

export const walletReducer = (state: InitialWalletStateType = initialWalletState, action: ActionsType): InitialWalletStateType => {

  switch (action.type) {
    case 'ADD-CRYPTO': {
      const addAsset = state.wallet.find(item => item.id === action.amout.id);
      if (addAsset) {
        state.wallet.map(item => {
          if (item.id === action.amout.id) {
            item.resultUsd = String(Number(item.resultUsd) + Number(action.amout.resultUsd));
          }
        })
        return { ...state, wallet: [...state.wallet] }
      }
      return { ...state, wallet: [...state.wallet, action.amout] }
    }

    case 'REMOVE-CRYPTO': {
      const removeAsset = state.wallet.find(item => item.id === action.amout.id);
      if (removeAsset) {
        state.wallet.map(item => {
          if (item.id === action.amout.id) {
            item.resultUsd = String(Number(item.resultUsd) - Number(action.amout.resultUsd))
          }
        })
        return { ...state, wallet: [...state.wallet] }
      }
      return { ...state, wallet: [...state.wallet, action.amout] }
    }
    case 'COST-WALLET': {
      const costWallet = state.wallet.reduce((sum, current) => sum + +current.resultUsd, 10)
      return {
        ...state, costWallet: String(costWallet)
      }
    }
    default:
      return state;
  }
}


//action
export const addCrypto = (amout: CurrencyWalletType) => ({ type: 'ADD-CRYPTO', amout } as const)
export const removeCrypto = (amout: CurrencyWalletType) => ({ type: 'REMOVE-CRYPTO', amout } as const)
export const costWallet = (sum: string) => ({ type: 'COST-WALLET', sum } as const)


//Type
export type CurrencyWalletType = {
  id: string
  name: string
  resultUsd: string
}
type InitialWalletStateType = typeof initialWalletState

type ActionsType = ReturnType<typeof addCrypto> | ReturnType<typeof removeCrypto> | ReturnType<typeof costWallet> 