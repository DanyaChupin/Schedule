import { FC } from 'react'
import Search from '../search/Search'
import SelectionMonth from '../selectionMonth/SelectionMonth'
import styles from './options.module.scss'

const Options: FC = () => {
	return (
		<div className={styles.options__wrapper}>
			<Search />
			<SelectionMonth />
		</div>
	)
}

export default Options
