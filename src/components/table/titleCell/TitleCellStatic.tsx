import { FC } from 'react'
import styles from '../table.module.scss'

const TitleCellStatic: FC<{ title: string }> = ({ title }) => {
	return (
		<div className={styles.titleCell}>
			<p>{title}</p>
		</div>
	)
}

export default TitleCellStatic
