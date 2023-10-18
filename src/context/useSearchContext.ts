import { createContext, useContext } from 'react'

export type ISearchContext = {
	search: string
	setSearch: (search: string) => void
}

export const MySearchContext = createContext<ISearchContext>({
	search: '',
	setSearch: () => {},
})
export const useSearchContext = () => useContext(MySearchContext)
