import { createBrowserRouter } from 'react-router-dom'
import { Home, Auth } from '../layouts'

import {
	LoginPage,
	HeroesPage,
	DCPage,
	MarvelPage,
	ConfigPage,
	HeroPage,
	SearchPage,
} from './../pages'

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
			{
				path: 'config',
				element: <ConfigPage />,
			},
			{
				path: 'hero/:id',
				element: <HeroPage />,
			},
			{
				path: 'search',
				element: <SearchPage />,
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
