import { NavLink } from 'react-router-dom'
import { SidebarMenuButton, SidebarMenuItem } from './'
import * as icons from './ui/icons'

export const ItemSidebar = ({ to, text, icon, isOpen }) => {
	const Icon = icons[icon]

	return (
		<>
			<SidebarMenuItem>
				<NavLink to={to}>
					{({ isActive }) => (
						<SidebarMenuButton isActive={isActive}>
							<span className='w-5 h-5 '>
								<Icon />
							</span>

							{isOpen && <span>{text}</span>}
						</SidebarMenuButton>
					)}
				</NavLink>
			</SidebarMenuItem>
		</>
	)
}
