import { createContext, useContext } from 'react'
import { IEmployee } from '../types/types'

export type IEmployeesState = {
	employeesState: IEmployee[]
	setEmployeesState: (arg: IEmployee[]) => void
}

export const MyEmployeesContext = createContext<IEmployeesState>({
	employeesState: [],
	setEmployeesState: () => {},
})
export const useEmployeesContext = () => useContext(MyEmployeesContext)
