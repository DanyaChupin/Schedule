import { FC, useEffect, useState } from 'react'
import styles from './cell.module.scss'
import { IEmployee, Status } from '../../types/types'
import { useGlobalContext } from '../../context/useGlobalContext'
import SelectionWindow from '../selectionWindow/selectionWindow'

interface ICell {
	employee: IEmployee
	title: string
	indexDay: number
}
const Cell: FC<ICell> = ({ title, employee, indexDay }) => {
	const [statusDay, setStatusDay] = useState('')
	const [isSelectionOpen, setIsSelectionOpen] = useState(false)
	const { month } = useGlobalContext()
	useEffect(() => {
		setStatusDay(title)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [month])

	let textColor
	let bgColor
	switch (statusDay) {
		case Status.DayOff:
			bgColor = '#f0304088'
			break
		case Status.Fired:
			bgColor = '#FF4F4F'
			textColor = '#fff'
			break
		case Status.IsIll:
			bgColor = '#FADA6B'

			break
		case Status.Vacation:
			textColor = '#fff'
			bgColor = '#219EE4'
			break
		default:
			bgColor = ''
			textColor = ''
	}

	const changeStatusDay = (status: string) => {
		setIsSelectionOpen(!isSelectionOpen)
		employee.schedule
			.filter(monthes => monthes.month == month)
			.map(month => {
				const isValidStatus = month.days[indexDay]
				if (isValidStatus == status) return
				for (let index = 0; index < month.days.length; index++) {
					if (month.days[index] == month.days[indexDay]) {
						month.days[indexDay] = status
						break
					}
				}
				setStatusDay(status)
			})
	}

	return (
		<div
			onClick={() => setIsSelectionOpen(!isSelectionOpen)}
			style={{
				color: `${textColor}`,
				backgroundColor: `${bgColor}`,
				cursor: 'pointer',
			}}
			className={styles.cell}
		>
			{statusDay}
			{isSelectionOpen && (
				<SelectionWindow
					setIsOpen={setIsSelectionOpen}
					changeStatusDay={changeStatusDay}
				/>
			)}
		</div>
	)
}

export default Cell
