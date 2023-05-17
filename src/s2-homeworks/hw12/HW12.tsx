import React, {ChangeEvent, useEffect} from 'react'
import s from './HW12.module.css'
import s2 from '../../s1-main/App.module.css'
import SuperSelect from '../hw07/common/c5-SuperSelect/SuperSelect'
import {useDispatch, useSelector} from 'react-redux'
import {changeThemeId} from './bll/themeReducer'


/*
* 1 - в файле themeReducer.ts написать нужные типы вместо any, дописать редьюсер
* 2 - получить themeId из редакса
* 3 - дописать тип и логику функции change
* 4 - передать пропсы в SuperSelect
* */

const themes = [
	{id: 1, value: 'Light'},
	{id: 2, value: 'Blue'},
	{id: 3, value: 'Dark'},
]

const HW12 = () => {
	const themeId = useSelector<any, number>(state => state.theme.themeId)
	const dispatch = useDispatch()

	const change = (e: ChangeEvent<HTMLSelectElement>) => {
		dispatch(changeThemeId(+e.currentTarget.value))
	}

	useEffect(() => {
		document.documentElement.dataset.theme = themeId + ''
	}, [themeId])

	return (
		<div id={'hw12'}>
			<div id={'hw12-text'} className={s2.hwTitle}>
				Homework #12
			</div>

			<div className={s2.hw}>
				<div className={s2.main}>
					Выберите тему<br/>
				<SuperSelect
					id={'hw12-select-theme'}
					className={s.select}
					options={themes}
					value={themeId}
					onChange={change}
					style={{marginTop: '10px'}}
				/>
				</div>
			</div>
		</div>
	)
}

export default HW12
