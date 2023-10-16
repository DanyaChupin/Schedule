import styles from './selectionWindow.module.scss'
import { data } from './data'
import SelectionWindowItem from './selectionWindowItem'
import { FC } from 'react'
import { useOutsideClick } from '../../hook/useOutSide'

const SelectionWindow: FC<{
	setIsOpen: (isOpen: boolean) => void
	changeStatusDay: (status: string) => void
}> = ({ changeStatusDay, setIsOpen }) => {
	const ref = useOutsideClick(() => {
		setIsOpen(false)
	})
	return (
		<div className={styles.wrapper} ref={ref}>
			{data.map(menuItem => (
				<SelectionWindowItem
					changeStatusDay={changeStatusDay}
					title={menuItem.title}
					status={menuItem.status}
					key={menuItem.title}
				/>
			))}
		</div>
	)
}

export default SelectionWindow
