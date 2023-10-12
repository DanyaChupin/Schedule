import { FC } from 'react'
import styles from './mountItem.module.scss'
import { useGlobalContext } from '../../../context/useGlobalContext'
const MountItem: FC<{ monthItem: string }> = ({ monthItem }) => {
	const { month, setMonth } = useGlobalContext()
	return (
		<li
			onClick={() => setMonth(monthItem)}
			className={`${styles.montItem__wrapper} ${
				monthItem == month && styles.monthItem__current
			}`}
		>
			{monthItem}
		</li>
	)
}

export default MountItem
