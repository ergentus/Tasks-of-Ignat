import React, {DetailedHTMLProps, InputHTMLAttributes, HTMLAttributes, useState} from 'react'
import s from './SuperEditableSpan.module.css'
import SuperInputText from '../../../hw04/common/c1-SuperInputText/SuperInputText'
import editIcon from './editIcon.svg'

// тип пропсов обычного инпута
type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>,
	HTMLInputElement>
// тип пропсов обычного спана
type DefaultSpanPropsType = DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>,
	HTMLSpanElement>

// здесь мы говорим что у нашего инпута будут такие же пропсы как у обычного инпута, кроме type
// (чтоб не писать value: string, onChange: ...; они уже все описаны в DefaultInputPropsType)
type SuperEditableSpanType = Omit<DefaultInputPropsType, 'type'> & {
	// и + ещё пропсы которых нет в стандартном инпуте
	onChangeText?: (value: string) => void
	onEnter?: () => void
	error?: string

	spanProps?: DefaultSpanPropsType & { defaultText?: string }// пропсы для спана
}

const SuperEditableSpan: React.FC<SuperEditableSpanType> = (
	{
		autoFocus,
		onBlur,
		onEnter,
		spanProps,
		...restProps
	},
) => {
	const [editMode, setEditMode] = useState<boolean>(false)
	const {children, onDoubleClick, className, defaultText, ...restSpanProps} = spanProps || {}

	const onEnterCallback = () => {
		onEnter?.()
		setEditMode(false)
	}
	const onBlurCallback = (e: React.FocusEvent<HTMLInputElement>) => {
		onBlur?.(e)
		setEditMode(false)
	}
	const onDoubleClickCallBack = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
		onDoubleClick?.(e)
		setEditMode(true)
	}

	const spanClassName = s.span
		+ (className ? ' ' + className : '')

	return (
		<>
			{editMode
				? <SuperInputText
					className={s.input}
					onBlur={onBlurCallback}
					onEnter={onEnterCallback}
					autoFocus
					{...restProps}
				/>
				: <div className={s.spanBlock}>
					<img src={editIcon} className={s.pen} alt={'edit'}/>
					<span
						onDoubleClick={onDoubleClickCallBack}
						className={spanClassName}
						{...restSpanProps}
					>
						{children || restProps.value || defaultText} {/*если нет захардкодженного текста для спана, то значение инпута*/}
					</span>
				</div>
			}
		</>
	)
}

export default SuperEditableSpan
