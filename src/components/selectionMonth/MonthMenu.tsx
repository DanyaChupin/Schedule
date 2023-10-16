import { FC } from 'react'
import MountItem from './MonthItem/MountItem'
import { allMonth } from '../data/month'
import styles from './selectionMonth.module.scss'

const MonthMenu: FC<{ isOpen: boolean }> = ({ isOpen }) => {
	const toggleMenu = isOpen ? 'open' : ''
	return (
		<div className={`${styles.menu} ${toggleMenu && styles.open}`}>
			<ul style={{ minHeight: '0' }}>
				{allMonth.map(month => (
					<MountItem monthItem={month[0] as string} key={month[0]} />
				))}
			</ul>
		</div>
	)
}

export default MonthMenu
