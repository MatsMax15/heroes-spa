import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './main.css'
import { Heroes } from './Heroes'

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<Heroes />
	</StrictMode>
)
