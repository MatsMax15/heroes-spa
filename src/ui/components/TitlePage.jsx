import { useNavigate } from 'react-router-dom'
import { IChevronLeft } from './ui'

export const TitlePage = ({ title }) => {
	const navigate = useNavigate()

	const onNavigateBack = () => {
		navigate(-1)
	}

	return (
		<>
			<div className='flex items-center mb-4 gap-2'>
				<button
					className='text-gray-400 w-7 h-7 hover:text-gray-500'
					onClick={onNavigateBack}
				>
					<IChevronLeft />
				</button>

				<h1 className='text-2xl font-bold text-gray-600'>{title}</h1>
			</div>
		</>
	)
}
