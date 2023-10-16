import { IEmployee } from '../../types/types'

export const employees: IEmployee[] = [
	{
		name: 'Данил',
		surname: 'Чупин',
		dadsurname: 'Алексеевич',
		schedule: [
			{
				month: 'Январь',
				days: ['1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			},
			{
				month: 'Февраль',
				days: ['1', '1', '1', '1', '1', '1', '1', '1', '1'],
			},
			{
				month: 'Март',
				days: ['1', '1', '1', '1', '1', '1', '1', '1', '1'],
			},
			{
				month: 'Апрель',
				days: ['1', '1', '1', '1', '1', '1', '1', '1', '1'],
			},
		],
	},
]
