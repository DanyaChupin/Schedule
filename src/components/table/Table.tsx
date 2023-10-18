/* eslint-disable no-mixed-spaces-and-tabs */
import { FC } from 'react'
import styles from './table.module.scss'
import TableLine from './TableLine'
import { useGetAllDay } from '../../hook/useGetAllDay'
import TableLineStatic from './TableLineStatic'
import { useEmployeesContext } from '../../context/useEmployeesContext'
import { useSearchContext } from '../../context/useSearchContext'

const Table: FC = () => {
	const { allDay, daysOfTheWeek } = useGetAllDay()
	const { employeesState } = useEmployeesContext()
	const { search } = useSearchContext()
	employeesState.filter(emp => emp.name == search)
	return (
		<>
			<div className={styles.table__wrapper}>
				<TableLineStatic title='' bg='#b8c4db44' nameDay={daysOfTheWeek} />
				<TableLineStatic title='Сотрудник' bg='#b8c3db44' numDay={allDay} />

				{search.length > 0
					? employeesState
							.filter(emp => emp.surname == search)
							.map(emp => (
								<TableLine
									key={emp.id}
									employeeName={
										emp.surname +
										' ' +
										emp.name.slice(0, 1) +
										'.' +
										' ' +
										emp.dadsurname.slice(0, 1) +
										'.'
									}
									employee={emp}
								/>
							))
					: employeesState.map(emp => (
							<TableLine
								key={emp.id}
								employeeName={
									emp.surname +
									' ' +
									emp.name.slice(0, 1) +
									'.' +
									' ' +
									emp.dadsurname.slice(0, 1) +
									'.'
								}
								employee={emp}
							/>
					  ))}
				<TableLineStatic title='Добавить сотрудника' bg='' />
			</div>
		</>
	)
}

export default Table
