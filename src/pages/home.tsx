import { FC } from 'react'
import Options from '../components/options/Options'
import styles from './home.module.scss'
import Schedule from '../components/schedule/Schedule'

const Home: FC = () => {
	return (
		<>
			<header className={styles.header}>График смен</header>
			<section className={styles.wrapper}>
				<Options />
				<Schedule />
			</section>
		</>
	)
}

export default Home
