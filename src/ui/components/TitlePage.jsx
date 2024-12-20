import { useNavigate } from 'react-router-dom'
import { IChevronLeft } from './ui'

export const TitlePage = ({ children, title }) => {
	const navigate = useNavigate()

	const onNavigateBack = () => {
		navigate(-1)
	}

	return (
		<>
			<div className='flex flex-col mb-4'>
				<div className='flex items-center gap-2'>
					<button
						className='text-gray-400 w-7 h-7 hover:text-gray-500'
						onClick={onNavigateBack}
					>
						<IChevronLeft />
					</button>

					<h1 className='text-2xl font-bold text-gray-600'>{title}</h1>
				</div>

				{children}
			</div>
		</>
	)
}
