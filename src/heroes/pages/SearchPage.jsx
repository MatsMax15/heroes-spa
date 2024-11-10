import { useLocation } from 'react-router-dom'
import queryString from 'query-string'
import { getHeroesByName } from '../helpers'
import { HeroCard } from '../components'
import { TitlePage } from '../../ui'

export const SearchPage = () => {
	const location = useLocation()
	const { q = '' } = queryString.parse(location.search)

	const heroes = getHeroesByName({ name: q })

	return (
		<>
			<div>
				<TitlePage title='Search'>
					<p className='text-sm text-gray-400'>Results for: {q}</p>
				</TitlePage>
			</div>

			<div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4'>
				{heroes.length === 0 && (
					<div className='text-center text-gray-500'>
						<p>No results found :(</p>
					</div>
				)}

				{heroes.map((hero) => (
					<HeroCard key={hero.id} {...hero} />
				))}
			</div>
		</>
	)
}
