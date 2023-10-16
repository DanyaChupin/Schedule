import { allMonth } from '../components/data/month'
import { useGlobalContext } from '../context/useGlobalContext'
import { DayOfTheWeek } from '../components/data/month'

export const useGetAllDay = () => {
	const { month } = useGlobalContext()
	const daysOfTheWeek: string[] = []
	for (let i = 0; i < 5; i++) {
		DayOfTheWeek.forEach(d => daysOfTheWeek.push(d))
	}
	const allDay: string[] = []
	for (const [key, value] of allMonth) {
		if (month == key) {
			const quantityDay = Number(value)
			for (let i = 1; i <= quantityDay; i++) {
				allDay.push(i.toString())
			}
		}
	}
	return { allDay, daysOfTheWeek }
}
