import { FC, useState } from 'react'
import Options from '../components/options/Options'
import styles from './home.module.scss'
import Schedule from '../components/schedule/Schedule'
import { useMonth } from '../hook/useMonth'
import { MyGlobalContext } from '../context/useGlobalContext'
const Home: FC = () => {
	const { monthName } = useMonth()
	const [month, setMonth] = useState<string>(monthName)
	return (
		<MyGlobalContext.Provider value={{ month, setMonth }}>
			<header className={styles.header}>График смен</header>
			<section className={styles.wrapper}>
				<Options />
				<Schedule />
			</section>
		</MyGlobalContext.Provider>
	)
}

export default Home
