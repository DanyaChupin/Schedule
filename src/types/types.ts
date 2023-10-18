export interface IMenuItem {
	month: string
	days: string[]
}

export interface IEmployee {
	id: number
	name: string
	surname: string
	dadsurname: string
	schedule: IMenuItem[]
}
export enum Status {
	Work = '1',
	DayOff = 'н',
	Vacation = 'о',
	IsIll = 'б',
	Fired = 'у',
	Delete = 'д',
}
