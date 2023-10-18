import { FC, useEffect, useState } from 'react'
import { IEmployee, Status } from '../../types/types'
import { data } from '../selectionWindow/data'
import { useGlobalContext } from '../../context/useGlobalContext'
import SelectionWindow from '../selectionWindow/SelectionWindow'
import styles from './cell.module.scss'

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
	}, [month, title])

	let textColor
	let bgColor
	switch (statusDay) {
		case Status.DayOff:
			bgColor = '#f0304088'
			textColor = '#2B2D35'
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
			textColor = '#2B2D35'
	}

	const changeStatusDay = (status: string) => {
		setIsSelectionOpen(!isSelectionOpen)

		employee.schedule
			.filter(monthes => monthes.month == month)
			.map(month => {
				const isValidStatus = status == month.days[indexDay]
				if (isValidStatus) return
				month.days[indexDay] = status
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
					data={data}
					setIsOpen={setIsSelectionOpen}
					changeSelection={changeStatusDay}
				/>
			)}
		</div>
	)
}

export default Cell
