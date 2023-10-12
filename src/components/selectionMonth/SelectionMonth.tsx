import { FC, useState } from 'react'
import styles from './selectionMonth.module.scss'
import MonthMenu from './MonthMenu'
// {`${styles.menu} ${toggleMenu && styles.open}`}
const SelectionMonth: FC = () => {
	const [isOpen, setIsOpen] = useState(false)
	const toggleMonthMenu = () => {
		setIsOpen(!isOpen)
	}
	return (
		<div
			className={styles.selectionMonth__wrapper}
			onClick={() => toggleMonthMenu()}
		>
			<div className={styles['selectionMonth__city']}>
				<p>Город</p>
				<img
					className={`${styles.selectionMonth__icon} ${
						isOpen && styles.icon__coup
					}`}
					src='/src/assets/triangle.svg'
					alt='open'
				/>
			</div>
			<MonthMenu isOpen={isOpen} />
		</div>
	)
}

export default SelectionMonth
