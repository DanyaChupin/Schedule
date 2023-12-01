import { FC } from 'react'
import styles from './search.module.scss'
import { useSearchContext } from '../../context/useSearchContext'

const Search: FC = () => {
	const { search, setSearch } = useSearchContext()

	return (
		<form>
			<label className={styles.search__wrapper}>
				<img src='/search.svg' alt='search' />
				<input
					className={styles.search__input}
					type='text'
					value={search}
					onChange={e => setSearch(e.target.value)}
					placeholder='Поиск'
				/>
			</label>
		</form>
	)
}

export default Search
