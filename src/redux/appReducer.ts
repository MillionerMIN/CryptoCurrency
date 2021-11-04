const InitialAppState = {
  isLoading: false,
  error: '' as RequestType
}



export const appReducer = (state = InitialAppState, action: AppActionType): InitialAppStateType => {
  switch (action.type) {
    case 'SET-IS-LOADING':
      return { ...state, isLoading: action.isLoading }
    case 'ERROR-HANDLER':
      return { ...state, error: action.text }
    default:
      return state
  }
}

export const setIsLoading = (isLoading: boolean) => ({
  type: 'SET-IS-LOADING', isLoading
} as const)
export const errorHandler = (text: RequestType) => ({ type: 'ERROR-HANDLER', text } as const)

type InitialAppStateType = typeof InitialAppState

type AppActionType = ReturnType<typeof setIsLoading> | ReturnType<typeof errorHandler>

export type RequestType = 'error' | ''