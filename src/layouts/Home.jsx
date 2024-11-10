import { ScrollRestoration } from 'react-router-dom'
import { AppMain, AppSidebar, SidebarProvider } from '../ui'

export const Home = () => {
	return (
		<>
			<SidebarProvider>
				<AppSidebar />

				<AppMain />

				<ScrollRestoration />
			</SidebarProvider>
		</>
	)
}
