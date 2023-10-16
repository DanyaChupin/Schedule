import { Status } from '../../types/types'

export const data: { title: string; status: string }[] = [
	{
		title: 'Рабочи день',
		status: Status.Work,
	},
	{
		title: 'Выходной',
		status: Status.DayOff,
	},
	{
		title: 'Отпуск',
		status: Status.Vacation,
	},
	{
		title: 'Больничный',
		status: Status.IsIll,
	},
	{
		title: 'Увольнение',
		status: Status.Fired,
	},
]
