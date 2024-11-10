import { useNavigate, useLocation } from 'react-router-dom'
import queryString from 'query-string'

import { useForm } from '../../hooks/useForm'
import { ILeterX, Input, ISearch } from './ui'
import { Fade } from 'react-awesome-reveal'

export const AppFormSearch = () => {
	const navigate = useNavigate()
	const location = useLocation()
	const { q = '' } = queryString.parse(location.search)

	const { onInputChange, searchText, setFormState } = useForm({
		searchText: q,
	})

	const handleSubmit = (e) => {
		e.preventDefault()

		if (searchText.trim() === '') {
			return
		}

		navigate(`/search?q=${searchText}`)
	}

	const handleResteForm = (e) => {
		e.preventDefault()
		setFormState({ searchText: '' })
		navigate('/')
	}

	return (
		<>
			<div className='w-60 md:w-96'>
				<form onSubmit={handleSubmit} className='relative'>
					{searchText && (
						<Fade duration={500}>
							<button
								type='button'
								className='absolute top-0 left-0 w-8 h-full text-muted bg-gray-600 rounded-l-full border border-gray-500 flex justify-center items-center hover:text-muted-foreground'
								onClick={handleResteForm}
							>
								<span className='block w-5 h-5'>
									<ILeterX />
								</span>
							</button>
						</Fade>
					)}

					<Input
						placeholder='Search...'
						name='searchText'
						autoComplete='off'
						className={searchText ? 'pl-10' : ''}
						value={searchText}
						onChange={onInputChange}
					/>

					<button
						type='submit'
						className='absolute border border-gray-500 top-0 right-0 w-8 h-full text-muted bg-gray-600 rounded-r-xl flex justify-center items-center hover:text-muted-foreground'
					>
						<span className='block w-5 h-5'>
							<ISearch />
						</span>
					</button>
				</form>
			</div>
		</>
	)
}
