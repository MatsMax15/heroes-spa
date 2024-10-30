import { createBrowserRouter } from 'react-router-dom'
import { Home, Auth } from '../layouts'

import { LoginPage, HeroesPage, DCPage, MarvelPage } from './../pages'

export const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
		children: [
			{
				index: true,
				element: <HeroesPage />,
			},
			{
				path: 'dc',
				element: <DCPage />,
			},
			{
				path: 'marvel',
				element: <MarvelPage />,
			},
		],
	},
	{
		path: 'login',
		element: <Auth />,
		children: [
			{
				index: true,
				element: <LoginPage />,
			},
		],
	},
])
