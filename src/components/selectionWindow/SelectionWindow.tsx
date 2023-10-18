import { FC } from 'react'
import { useOutsideClick } from '../../hook/useOutSide'
import SelectionWindowItem from './SelectionWindowItem'
import { Status } from '../../types/types'
import styles from './selectionWindow.module.scss'

interface ISelection {
	data?: { title: string; status: Status }[]
	setIsOpen: (isOpen: boolean) => void
	changeSelection: (status: string) => void
}

const SelectionWindow: FC<ISelection> = ({
	changeSelection,
	setIsOpen,
	data,
}) => {
	const ref = useOutsideClick(() => {
		setIsOpen(false)
	})
	return (
		<div className={styles.wrapper} ref={ref}>
			{data &&
				data.map(menuItem => (
					<SelectionWindowItem
						changeSelection={changeSelection}
						title={menuItem.title}
						status={menuItem.status}
						key={menuItem.title}
					/>
				))}
		</div>
	)
}

export default SelectionWindow
