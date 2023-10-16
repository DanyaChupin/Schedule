import { FC } from 'react'
import styles from '../table.module.scss'

const TitleCell: FC<{ title?: string; bg?: string }> = ({
	title = '',
	bg = '',
}) => {
	return (
		<p style={{ backgroundColor: `${bg}` }} className={styles.cellTop}>
			{title}
		</p>
	)
}

export default TitleCell
