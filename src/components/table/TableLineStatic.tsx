import { FC } from 'react'
import styles from './table.module.scss'
import CellStatic from '../cell/CellStatic'
import { useGetAllDay } from '../../hook/useGetAllDay'
import ButtonCell from './buttonCell/ButtonCell'
import TitleCellStatic from './titleCell/TitleCellStatic'

interface ITableLineStatic {
	title: string
	numDay?: string[]
	nameDay?: string[]
	bg: string
}

const TableLineStatic: FC<ITableLineStatic> = ({
	title,
	numDay,
	nameDay,
	bg,
}) => {
	const { allDay } = useGetAllDay()
	return (
		<div
			style={{ backgroundColor: `${bg}` }}
			className={styles.tableTop_wrapper}
		>
			{title == 'Добавить сотрудника' ? (
				<ButtonCell title={title} />
			) : (
				<TitleCellStatic title={title} />
			)}
			{nameDay &&
				nameDay
					.slice(0, allDay.length)
					.map((day, index) => <CellStatic title={day} key={index} />)}
			{numDay &&
				numDay.map((day, index) => <CellStatic title={day} key={index} />)}
		</div>
	)
}

export default TableLineStatic
