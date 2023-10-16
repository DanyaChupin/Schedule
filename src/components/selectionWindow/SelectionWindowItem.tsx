import { FC } from 'react'
import styles from './selectionWindow.module.scss'

const SelectionWindowItem: FC<{
	title: string
	changeStatusDay: (status: string) => void
	status: string
}> = ({ title, changeStatusDay, status }) => {
	return (
		<button
			onClick={() => changeStatusDay(status)}
			className={styles.statusButton}
		>
			{title}
		</button>
	)
}

export default SelectionWindowItem
