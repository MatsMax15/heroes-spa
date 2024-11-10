import { Link } from 'react-router-dom'
import {
	Avatar,
	ILetterH,
	SidebarHeader,
	AvatarImage,
	AvatarFallback,
	IChevronRight,
} from './ui'

export const HeaderSidebar = ({ isOpen, isMobile }) => {
	return (
		<>
			<SidebarHeader className={isMobile ? 'shadow bg-primary py-4 gap-4' : ''}>
				{isMobile && (
					<div className='flex px-3 gap-2'>
						<Avatar className='w-10 h-10'>
							<AvatarImage src='https://github.com/shadcn.png' />
							<AvatarFallback>CN</AvatarFallback>
						</Avatar>

						<div className='flex flex-col justify-center'>
							<span className='text-muted text-sm font-semibold'>
								Carlos Navarro
							</span>
							<span className='text-xs text-muted'>
								<Link
									to='/profile'
									className='flex ic hover:text-muted-foreground'
								>
									Mi perfil
									<span className='w-4 h-4 flex'>
										<IChevronRight />
									</span>
								</Link>
							</span>
						</div>
					</div>
				)}

				<div className='flex items-center justify-center py-4'>
					{isOpen ? (
						<>
							<img src='./../icon-heroes.png' alt='Heroes' className='w-20' />
						</>
					) : (
						<span className='w-5 h-5 text-orange-600'>
							<ILetterH />
						</span>
					)}
				</div>
			</SidebarHeader>
		</>
	)
}
