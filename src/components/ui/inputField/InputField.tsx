import { FC, ReactNode } from 'react'
import styles from '../form/form.module.scss'
interface IInputField {
	title: string
	option: string
	setOption: (e: string) => void
	setValidate: (arg: string) => void
	children: ReactNode
}
const InputField: FC<IInputField> = ({
	title,
	option,
	setOption,
	setValidate,
	children,
}) => {
	return (
		<div className={styles.input__wrapper}>
			<p className={styles.input__title}>{title}</p>
			<input
				className={styles.input}
				type='text'
				required
				value={option}
				onChange={e => {
					setOption(e.target.value)
					if (option.length > 0) {
						const isValidate = option[0] == option[0].toUpperCase()
						{
							isValidate && setValidate('')
						}
					} else {
						setValidate('Поле должно начинаться с заглавной буквы!')
					}
				}}
			/>
			<p className={styles.validateError}>{children}</p>
		</div>
	)
}

export default InputField
