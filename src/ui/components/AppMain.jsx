import { useState } from 'react'
import { useNavigate, Link, Outlet } from 'react-router-dom'

import { cn } from '../../lib/utils'
import {
	SidebarTrigger,
	useSidebar,
	Avatar,
	AvatarFallback,
	AvatarImage,
} from './ui'

export const AppMain = () => {
	const [user, setUser] = useState(true)
	const navigate = useNavigate()

	const handleLogout = () => {
		setUser(false)
		navigate('/login', {
			replace: true,
		})
	}

	const { open } = useSidebar()
	const size = open ? 'md:w-[calc(100%-14rem)]' : 'md:w-[calc(100%-4rem)]'

	return (
		<>
			<main
				className={cn('w-full py-2 px-2 md:pl-0 transition duration-700', size)}
			>
				<nav className='p-2 bg-primary rounded-xl flex justify-between items-center gap-2 mb-2'>
					<SidebarTrigger />

					{user ? (
						<>
							<div className='flex gap-4'>
								<button
									className='text-gray-400 text-xs'
									onClick={handleLogout}
								>
									Logout
								</button>

								<Avatar className='w-7 h-7'>
									<AvatarImage src='https://github.com/shadcn.png' />
									<AvatarFallback>CN</AvatarFallback>
								</Avatar>
							</div>
						</>
					) : (
						<Link
							to='/login'
							className='text-muted px-2 hover:text-muted-foreground text-xs'
						>
							Login
						</Link>
					)}
				</nav>

				<div className='min-h-[calc(100%-3.5rem)] bg-background-min rounded-xl shadow p-4'>
					<Outlet />
				</div>
			</main>
		</>
	)
}
