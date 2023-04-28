import {UserType} from '../HW8'

type ActionsType =
	| sortUpAndDownACType
	| check18ACType

type sortUpAndDownACType = ReturnType<typeof sortUpAndDownAC>
type check18ACType = ReturnType<typeof check18AC>

export const homeWorkReducer = (state: UserType[], action: ActionsType): UserType[] => { // need to fix any
	switch (action.type) {
		case 'sort': {
			return action.payload === 'up'
				? [...state].sort((a, b) => a.name.localeCompare(b.name))
				: action.payload === 'down'
					? [...state].sort((a, b) => b.name.localeCompare(a.name))
					: []
		}
		case 'check': {
			return state.filter((a) => a.age >= action.payload)
		}
		default:
			return state
	}
}

export const sortUpAndDownAC = (text: string) => {
	return {
		type: 'sort',
		payload: text,
	} as const
}

export const check18AC = (age: number) => {
	return {
		type: 'check',
		payload: age,
	} as const
}