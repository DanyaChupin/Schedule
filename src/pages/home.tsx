import { FC, useState } from 'react'
import Options from '../components/options/Options'
import { useMonth } from '../hook/useMonth'
import { MyGlobalContext } from '../context/useGlobalContext'
import Table from '../components/table/Table'
import styles from './home.module.scss'
import { employees } from '../components/data/employees'
import { MyEmployeesContext } from '../context/useEmployeesContext'

const Home: FC = () => {
	const { monthName } = useMonth()
	const [month, setMonth] = useState<string>(monthName)
	const [employeesState, setEmployeesState] = useState(employees)
	return (
		<MyGlobalContext.Provider value={{ month, setMonth }}>
			<header className={styles.header}>График смен</header>
			<MyEmployeesContext.Provider
				value={{ employeesState, setEmployeesState }}
			>
				<section className={styles.wrapper}>
					<Options />
					<Table />
				</section>
			</MyEmployeesContext.Provider>
		</MyGlobalContext.Provider>
	)
}

export default Home
