import { FC, useState } from 'react'
import Options from '../components/options/Options'
import { useMonth } from '../hook/useMonth'
import { MyGlobalContext } from '../context/useGlobalContext'
import Table from '../components/table/Table'
import styles from './home.module.scss'

const Home: FC = () => {
	const { monthName } = useMonth()
	const [month, setMonth] = useState<string>(monthName)
	return (
		<MyGlobalContext.Provider value={{ month, setMonth }}>
			<header className={styles.header}>График смен</header>
			<section className={styles.wrapper}>
				<Options />
				<Table />
			</section>
		</MyGlobalContext.Provider>
	)
}

export default Home
