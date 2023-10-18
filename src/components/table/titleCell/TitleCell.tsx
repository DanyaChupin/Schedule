import { FC, useState } from 'react'
import styles from '../table.module.scss'
import SelectionWindow from '../../selectionWindow/SelectionWindow'
import { Status } from '../../../types/types'
import { useEmployeesContext } from '../../../context/useEmployeesContext'

const TitleCell: FC<{
	employeeName: string
	employeeId: number
	bg?: string
}> = ({ employeeId, bg = '', employeeName }) => {
	const [isSelectOpen, setIsSelectOpen] = useState(false)
	const { employeesState, setEmployeesState } = useEmployeesContext()
	const removeEmployee = () => {
		const removeEmployees = employeesState.filter(emp => emp.id !== employeeId)
		setEmployeesState(removeEmployees)
	}

	return (
		<div className={styles.titleCell}>
			<p style={{ backgroundColor: `${bg}` }}>{employeeName}</p>
			{employeeName && (
				<div className={styles.option__wrapper}>
					<span className={styles.option__button}>
						<img src='/src/assets/change.svg' />
					</span>
					<span
						className={styles.option__button}
						onClick={() => setIsSelectOpen(true)}
					>
						<img src='/src/assets/option.svg' />
					</span>
					{isSelectOpen && (
						<SelectionWindow
							setIsOpen={setIsSelectOpen}
							data={[{ title: 'Удалить из списка', status: Status.Delete }]}
							changeSelection={removeEmployee}
						/>
					)}
				</div>
			)}
		</div>
	)
}

export default TitleCell
