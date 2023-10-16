import { FC } from 'react'
import styles from './cell.module.scss'

const CellStatic: FC<{ title: string; bg?: string }> = ({ title, bg }) => {
	let color = ''
	if (title == 'сб' || title == 'вс') {
		bg = '#f0304088'
		color = '#F0303F'
	}

	switch (title) {
		case '6':
			bg = '#f0304088'
			color = '#F0303F'
			break
		case '7':
			bg = '#f0304088'
			color = '#F0303F'
			break
		case '13':
			bg = '#f0304088'
			color = '#F0303F'
			break
		case '14':
			bg = '#f0304088'
			color = '#F0303F'
			break
		case '20':
			bg = '#f0304088'
			color = '#F0303F'
			break
		case '21':
			bg = '#f0304088'
			color = '#F0303F'
			break
		case '27':
			bg = '#f0304088'
			color = '#F0303F'
			break
		case '28':
			bg = '#f0304088'
			color = '#F0303F'
			break
	}
	return (
		<div
			style={{ backgroundColor: `${bg}`, color: `${color}` }}
			className={styles.cell}
		>
			{title}
		</div>
	)
}

export default CellStatic
