import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarGroup,
	SidebarGroupContent,
	SidebarGroupLabel,
	SidebarMenu,
	useSidebar,
	ItemSidebar,
	HeaderSidebar,
} from './'

export function AppSidebar() {
	const { open, isMobile } = useSidebar()

	return (
		<Sidebar variant='floating' collapsible='icon'>
			<HeaderSidebar isOpen={open} isMobile={isMobile} />

			<SidebarContent className='py-4'>
				<SidebarGroup>
					<SidebarGroupContent>
						<SidebarMenu>
							<ItemSidebar to='/' text='Inicio' icon='IHome' isOpen={open} />

							{open && <SidebarGroupLabel>Heroes</SidebarGroupLabel>}

							<ItemSidebar
								to='/marvel'
								text='Marvel'
								icon='ILetterM'
								isOpen={open}
							/>

							<ItemSidebar to='/dc' text='DC' icon='ILetterD' isOpen={open} />
						</SidebarMenu>
					</SidebarGroupContent>
				</SidebarGroup>
			</SidebarContent>

			<SidebarFooter>
				<SidebarMenu title='Menu'>
					<ItemSidebar
						to='/config'
						text='Configuración'
						icon='IConfig'
						isOpen={open}
					/>
				</SidebarMenu>
			</SidebarFooter>
		</Sidebar>
	)
}
