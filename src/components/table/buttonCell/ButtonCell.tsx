import { FC, useState } from 'react'
import styles from './buttonCell.module.scss'
import CreationMenu from '../../creationMenu/CreationMenu'
const ButtonCell: FC<{ title: string }> = ({ title }) => {
	const [isCreationMenuOpen, setIsCreationMenuOpen] = useState(false)
	return (
		<>
			<div
				onClick={() => setIsCreationMenuOpen(true)}
				className={styles.buttonCell__wrapper}
			>
				<img src='/src/assets/plus.svg' alt='Create' />
				{title}
			</div>
			{isCreationMenuOpen && (
				<CreationMenu setIsCreationMenuOpen={setIsCreationMenuOpen} />
			)}
		</>
	)
}

export default ButtonCell
