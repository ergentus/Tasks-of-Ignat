type IdType = {
	themeId: number
}

const initState: IdType = {
	themeId: 1,
}
type changeThemeIdType = ReturnType<typeof changeThemeId>

export const themeReducer = (state = initState, action: changeThemeIdType): IdType => {
	switch (action.type) {
		case 'SET_THEME_ID':
			return {...state, themeId: action.id}

		default:
			return state
	}
}

export const changeThemeId = (id: number) => ({type: 'SET_THEME_ID', id} as const)
