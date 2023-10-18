import { FC } from 'react'
import styles from './selectionWindow.module.scss'

const SelectionWindowItem: FC<{
	title: string
	changeSelection: (status: string) => void
	status: string
}> = ({ title, changeSelection, status }) => {
	return (
		<button
			onClick={() => changeSelection(status)}
			className={styles.statusButton}
		>
			{title}
		</button>
	)
}

export default SelectionWindowItem
