export type LoadingType = {
	isLoading: boolean
}

type LoadingActionType = ReturnType<typeof loadingAC>

const initState: LoadingType = {
	isLoading: false,
}

export const loadingReducer = (state: LoadingType = initState, action: LoadingActionType): LoadingType => {
	switch (action.type) {
		case 'CHANGE_LOADING':
			return {...state, isLoading: action.isLoading}

		default:
			return state
	}
}

export const loadingAC = (isLoading: boolean) => ({
	type: 'CHANGE_LOADING',
	isLoading,
}) as const
