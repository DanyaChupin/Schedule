import { FC, useState } from 'react'
import styles from './selectionMonth.module.scss'
import MonthMenu from './MonthMenu'
import { useGlobalContext } from '../../context/useGlobalContext'
const SelectionMonth: FC = () => {
	const [isOpen, setIsOpen] = useState(false)
	const { month } = useGlobalContext()
	const toggleMonthMenu = () => {
		setIsOpen(!isOpen)
	}
	return (
		<div
			className={styles.selectionMonth__wrapper}
			onClick={() => toggleMonthMenu()}
		>
			<div className={styles.selectionMonth__city}>
				<p>{month}</p>
				<img
					className={`${styles.selectionMonth__icon} ${
						isOpen && styles.icon__coup
					}`}
					src='/triangle.svg'
					alt='open'
				/>
			</div>
			<MonthMenu isOpen={isOpen} />
		</div>
	)
}

export default SelectionMonth
