import { createContext, useContext } from 'react'
export type GlobalContent = {
	month: string
	setMonth: (c: string) => void
}

export const MyGlobalContext = createContext<GlobalContent>({
	month: '', // set a default value
	setMonth: () => {},
})
export const useGlobalContext = () => useContext(MyGlobalContext)
