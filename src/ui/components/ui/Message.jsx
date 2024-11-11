import { cn } from '../../../lib/utils'
import { IMoodPuzzled, IMoodX } from './icons'

export const Message = ({ type }) => {
	const classByType =
		type === 'warning'
			? 'bg-orange-300/20 shadow-orange-300 '
			: 'bg-blue-300/20 shadow-blue-300'

	const Icon = type === 'warning' ? <IMoodX /> : <IMoodPuzzled />

	return (
		<>
			<div
				className={cn(
					'text-center text-gray-500  rounded-xl p-4 shadow flex flex-col justify-center items-center gap-4',
					classByType
				)}
			>
				<p>Search a hero</p>
				<span className='w-14 h-14 block'>{Icon}</span>
			</div>
		</>
	)
}
