import React, {useState} from 'react'
import SuperButton from '../hw04/common/c2-SuperButton/SuperButton'
import {restoreState} from '../hw06/localStorage/localStorage'
import s from './Clock.module.css'

function Clock() {
	const [timerId, setTimerId] = useState<number | undefined>(undefined)
	// for autotests // не менять // можно подсунуть в локалСторэдж нужную дату, чтоб увидеть как она отображается
	const [date, setDate] = useState<Date>(new Date(restoreState('hw9-date', Date.now())))
	const [show, setShow] = useState<boolean>(false)

	const formatTime = new Intl.DateTimeFormat('ru', {
		hour: 'numeric',
		minute: 'numeric',
		second: 'numeric',
	})
	const formatDay = new Intl.DateTimeFormat('en', {
		weekday: 'long',
	})
	const formatDate = new Intl.DateTimeFormat('ru', {
		day: '2-digit',
		month: '2-digit',
		year: 'numeric'
	})
	const formatMonth = new Intl.DateTimeFormat('en', {
		month: 'long',
	})

	const start = () => {
		stop()

		setTimerId(window.setInterval(() => {
			setDate(new Date())
		}, 1000))
	}
	const stop = () => {
		clearInterval(timerId)
		setTimerId(0)
	}
	const onMouseEnter = () => {
		setShow(true)
	}
	const onMouseLeave = () => {
		setShow(false)
	}

	const stringTime = formatTime.format(date) || <br/>
	const stringDate = formatDate.format(date) || <br/>
	const stringDay = formatDay.format(date) || <br/>
	const stringMonth = formatMonth.format(date) || <br/>

	return (
		<div className={s.clock}>
			<div
				id={'hw9-watch'}
				className={s.watch}
				onMouseEnter={onMouseEnter}
				onMouseLeave={onMouseLeave}
			>
				<span id={'hw9-day'}>{stringDay}</span>{`, `}
				<span id={'hw9-time'}><strong>{stringTime}</strong></span>
			</div>

			<div id={'hw9-more'}>
				<div className={s.more}>
					{show
						? (<>
							<span id={'hw9-date'}>{stringDate}</span>,{' '}
							<span id={'hw9-month'}>{stringMonth}</span>
						</>)
						: (<>
							<br/>
						</>)
					}
				</div>
			</div>

			<div className={s.buttonsContainer}>
				<SuperButton
					id={'hw9-button-start'}
					disabled={!!timerId}
					onClick={start}
				>
					Start
				</SuperButton>
				<SuperButton
					id={'hw9-button-stop'}
					disabled={!timerId}
					onClick={stop}
				>
					Stop
				</SuperButton>
			</div>
		</div>
	)
}

export default Clock
