export const useMonth = () => {
	const date = new Date()
	const month = date.toLocaleString('default', { month: 'long' })
	const monthName = month[0].toUpperCase() + month.slice(1)
	return { monthName }
}
