import { Outlet } from 'react-router-dom'

import { cn } from '../../lib/utils'
import { useSidebar } from './ui'
import { AppNavbar } from './AppNavbar'

export const AppMain = () => {
	const { open } = useSidebar()
	const size = open ? 'md:w-[calc(100%-14rem)]' : 'md:w-[calc(100%-4rem)]'

	return (
		<>
			<main
				className={cn('w-full py-2 px-2 md:pl-0 transition duration-700', size)}
			>
				<AppNavbar />

				<div className='min-h-[calc(100%-3.5rem)] bg-background-min rounded-xl shadow p-4 block md:flex justify-center'>
					<section className='w-full md:max-w-[1080px]'>
						<Outlet />
					</section>
				</div>
			</main>
		</>
	)
}
