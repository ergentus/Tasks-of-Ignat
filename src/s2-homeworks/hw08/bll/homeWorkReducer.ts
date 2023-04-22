import {UserType} from '../HW8'

type ActionsType =
	| sortUpAndDownAC
	| check18AC

type sortUpAndDownAC = ReturnType<typeof sortUpAndDownAC>
type check18AC = ReturnType<typeof check18AC>

export const homeWorkReducer = (state: UserType[], action: ActionsType): UserType[] => { // need to fix any
	switch (action.type) {
		case 'sort': {
			return action.payload === 'up'
				? [...state].sort((a, b) => a.name.localeCompare(b.name))
				: [...state].sort((a, b) => b.name.localeCompare(a.name))
		}
		case 'check': {
			return state.filter((a) => a.age >= 18)
		}
		default:
			return state
	}
}

export const sortUpAndDownAC = (text: string) => {
	return {
		type: 'sort',
		payload: text
	} as const
}

export const check18AC = () => {
	return {
		type: 'check',
		payload: 18
	} as const
}