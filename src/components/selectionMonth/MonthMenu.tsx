import { FC } from 'react'
import styles from './selectionMonth.module.scss'

const MonthMenu: FC<{ isOpen: boolean }> = ({ isOpen }) => {
	const toggleMenu = isOpen ? 'open' : ''
	console.log(isOpen)

	return (
		<div className={`${styles.menu} ${toggleMenu && styles.open}`}>
			<ul style={{ minHeight: '0' }}>
				<li>Sentember</li>
				<li>Sentember</li>
				<li>Sentember</li>
				<li>Sentember</li>
				<li>Sentember</li>
			</ul>
		</div>
	)
}

export default MonthMenu
