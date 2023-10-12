import { FC } from 'react'
import styles from './search.module.scss'

const Search: FC = () => {
	return (
		<form>
			<label className={styles.search__wrapper}>
				<img src='/src/assets/search.svg' alt='search' />
				<input
					className={styles.search__input}
					type='text'
					placeholder='Поиск'
				/>
			</label>
		</form>
	)
}

export default Search
