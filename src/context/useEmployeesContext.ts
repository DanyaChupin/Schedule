import { createContext, useContext } from 'react'
import { IEmployee } from '../types/types'

export type CreationMenuContext = {
	employeesState: IEmployee[]
	setEmployeesState: (arg: IEmployee[]) => void
}

export const MyEmployeesContext = createContext<CreationMenuContext>({
	employeesState: [],
	setEmployeesState: () => {},
})
export const useEmployeesContext = () => useContext(MyEmployeesContext)
