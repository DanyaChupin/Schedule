import { FC } from 'react'
import Form from '../ui/form/Form'
import { useOutsideClick } from '../../hook/useOutSide'
import styles from './creationMenu.module.scss'

const CreationMenu: FC<{
	setIsCreationMenuOpen: (isOpen: boolean) => void
}> = ({ setIsCreationMenuOpen }) => {
	const ref = useOutsideClick(() => {
		setIsCreationMenuOpen(false)
	})
	return (
		<div ref={ref} className={styles.wrapper}>
			<div className={styles.menu}>
				<h1>Добавить сотрудника</h1>
				<Form setIsCreationMenuOpen={setIsCreationMenuOpen} />
				<button
					onClick={() => setIsCreationMenuOpen(false)}
					className={styles.menu__button}
				>
					Назад
				</button>
			</div>
		</div>
	)
}

export default CreationMenu
