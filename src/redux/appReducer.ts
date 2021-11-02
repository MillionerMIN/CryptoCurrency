const InitialAppState = {
  isLoading: false,
}

export const AppReducer = (state = InitialAppState, action: AppActionType): InitialAppStateType => {
  switch (action.type) {
    case 'SET-IS-LOADING':
      return { ...state, isLoading: action.isLoading }
    default:
      return state
  }
}

export const setIsLoading = (isLoading: boolean) => ({
  type: 'SET-IS-LOADING', isLoading
} as const)

type InitialAppStateType = typeof InitialAppState

type AppActionType = ReturnType<typeof setIsLoading>