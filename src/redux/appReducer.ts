const InitialAppState = {
  isLoading: false,
  error: '' as RequestType,
}



export const appReducer = (state = InitialAppState, action: AppActionType): InitialAppStateType => {
  switch (action.type) {
    case 'SET-IS-LOADING':
      return { ...state, isLoading: action.isLoading }
    case 'ERROR-HANDLER':
      return { ...state, error: action.text }
    case 'SET-BUTTONS':
      return { ...state }
    case 'CHANGE-ACTIVE-BUTTON':
      return { ...state }
    default:
      return state
  }
}

export const setIsLoading = (isLoading: boolean) => ({
  type: 'SET-IS-LOADING', isLoading
} as const)
export const errorHandler = (text: RequestType) => ({ type: 'ERROR-HANDLER', text } as const)
export const setButtons = () => ({ type: 'SET-BUTTONS' } as const)
export const changeActiveButton = (active: boolean) => ({
  type: 'CHANGE-ACTIVE-BUTTON', active
} as const)

type InitialAppStateType = typeof InitialAppState

type AppActionType = ReturnType<typeof setIsLoading> | ReturnType<typeof errorHandler> | ReturnType<typeof changeActiveButton> | ReturnType<typeof setButtons>

export type ButtonsType = {
  buttons: ButtonType[]
}
export type ButtonType = {
  value: string
  active: boolean
}
export type RequestType = 'error' | ''