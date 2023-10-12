import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/home.tsx'
import './global.scss'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<Home />
	</React.StrictMode>
)
