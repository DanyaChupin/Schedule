import { FC } from 'react'
import TitleCell from './titleCell/TitleCell'
import styles from './table.module.scss'
import CellStatic from '../cell/CellStatic'
import { useGetAllDay } from '../../hook/useGetAllDay'

interface ITableLine {
	title?: string
	numDay?: string[]
	nameDay?: string[]
	bg?: string
}

const TableLineStatic: FC<ITableLine> = ({
	title = '',
	numDay,
	nameDay,
	bg = '',
}) => {
	const { allDay } = useGetAllDay()

	return (
		<div
			style={{ backgroundColor: `${bg}` }}
			className={styles.tableTop_wrapper}
		>
			<TitleCell title={title} />
			{nameDay &&
				nameDay
					.slice(0, allDay.length)
					.map((day, index) => <CellStatic title={day} key={index} />)}
			{numDay && numDay.map(day => <CellStatic title={day} key={day} />)}
		</div>
	)
}

export default TableLineStatic
