import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'

import { Avatar, AvatarFallback, AvatarImage, SidebarTrigger } from './ui'
import { AppFormSearch } from './AppFormSearch'

export const AppNavbar = () => {
	const [user, setUser] = useState(true)
	const navigate = useNavigate()

	const handleLogout = () => {
		setUser(false)
		navigate('/login', {
			replace: true,
		})
	}

	return (
		<>
			<nav className='p-2 bg-primary rounded-xl flex justify-between items-center gap-2 mb-2'>
				<SidebarTrigger />

				<AppFormSearch />

				{user ? (
					<>
						<div className='flex gap-4'>
							<button className='text-gray-400 text-xs' onClick={handleLogout}>
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
		</>
	)
}
