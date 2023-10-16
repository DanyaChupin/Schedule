import { FC } from 'react'
import styles from './table.module.scss'
import TableLine from './TableLine'
import { useGetAllDay } from '../../hook/useGetAllDay'
import { employees } from '../data/employees'
import TableLineStatic from './TableLineStatic'

const Table: FC = () => {
	const { allDay, daysOfTheWeek } = useGetAllDay()
	return (
		<div className={styles.table__wrapper}>
			<TableLineStatic bg='#b8c4db44' nameDay={daysOfTheWeek} />
			<TableLineStatic bg='#b8c3db44' title='Сотрудник' numDay={allDay} />
			{employees.map(emp => (
				<TableLine
					key={emp.name}
					title={
						emp.surname +
						' ' +
						emp.name.slice(0, 1) +
						'.' +
						' ' +
						emp.dadsurname.slice(0, 1) +
						'.'
					}
					employee={emp}
					bg='#fff'
				/>
			))}
			<TableLineStatic title='Добавить сотрудника' />
		</div>
	)
}

export default Table
