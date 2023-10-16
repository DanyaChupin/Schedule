import { FC } from 'react'
import Cell from '../cell/Cell'
import TitleCell from './titleCell/TitleCell'
import styles from './table.module.scss'
import { IEmployee } from '../../types/types'
import { useGlobalContext } from '../../context/useGlobalContext'

interface ITableLine {
	employee: IEmployee
	title?: string
	bg?: string
}

const TableLine: FC<ITableLine> = ({ employee, title = '', bg = '' }) => {
	const { month } = useGlobalContext()

	return (
		<div
			style={{ backgroundColor: `${bg}` }}
			className={styles.tableTop_wrapper}
		>
			<TitleCell title={title} />
			{employee &&
				employee.schedule
					.filter(monthes => monthes.month == month)
					.map(month =>
						month.days.map((nameDay, index) => {
							return (
								<Cell
									employee={employee}
									title={nameDay}
									indexDay={index}
									key={index + 1}
								/>
							)
						})
					)}
		</div>
	)
}

export default TableLine
