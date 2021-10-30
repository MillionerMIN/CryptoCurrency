const initialWalletState = {
  wallet: [] as CurrencyWalletType[],
  costWallet: 0,
  sessionCostWallet: 0,
}

export const walletReducer = (state: InitialWalletStateType = initialWalletState, action: ActionsType): InitialWalletStateType => {

  switch (action.type) {
    case 'ADD-CRYPTO': {
      const addAsset = state.wallet.find(item => item.id === action.amout.id);
      if (addAsset) {
        state.wallet.map(item => {
          if (item.id === action.amout.id) {
            item.resultUsd = item.resultUsd + action.amout.resultUsd;
            item.count = item.count + action.amout.count;
          }
        })
        return { ...state, wallet: [...state.wallet], costWallet: state.costWallet + action.amout.resultUsd, sessionCostWallet: action.amout.resultUsd }
      }
      return { ...state, wallet: [...state.wallet, action.amout], costWallet: state.costWallet + action.amout.resultUsd, sessionCostWallet: action.amout.resultUsd }
    }

    case 'REMOVE-CRYPTO': {
      const removeAsset = state.wallet.find(item => item.id === action.amout.id);
      if (removeAsset) {
        state.wallet.map(item => {
          if (item.id === action.amout.id) {
            item.resultUsd = item.resultUsd < action.amout.resultUsd ? item.resultUsd - item.resultUsd : item.resultUsd - action.amout.resultUsd
            item.count = item.count < action.amout.count ? item.count - item.count : item.count - action.amout.count;
          }
        })
        return { ...state, wallet: [...state.wallet], costWallet: state.costWallet < action.amout.resultUsd ? state.costWallet - state.costWallet : state.costWallet - action.amout.resultUsd, sessionCostWallet: action.amout.resultUsd }
      }
      return { ...state, wallet: [...state.wallet, action.amout], costWallet: state.costWallet < action.amout.resultUsd ? state.costWallet - state.costWallet : state.costWallet - action.amout.resultUsd, sessionCostWallet: action.amout.resultUsd }
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
export const addCrypto = (amout: CurrencyWalletType) => ({ type: 'ADD-CRYPTO', amout } as const)
export const removeCrypto = (amout: CurrencyWalletType) => ({ type: 'REMOVE-CRYPTO', amout } as const)
export const costWallet = (sum: string) => ({ type: 'COST-WALLET', sum } as const)


//Type
export type CurrencyWalletType = {
  id: string
  count: number
  resultUsd: number
}
export type InitialWalletStateType = typeof initialWalletState

type ActionsType = ReturnType<typeof addCrypto> | ReturnType<typeof removeCrypto> | ReturnType<typeof costWallet> 