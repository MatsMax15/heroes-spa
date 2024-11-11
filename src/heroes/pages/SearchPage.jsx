import { useLocation } from 'react-router-dom'
import queryString from 'query-string'
import { getHeroesByName } from '../helpers'

import { HeroCard } from '../components'
import { Message, TitlePage } from '../../ui'

export const SearchPage = () => {
	const location = useLocation()
	const { q = '' } = queryString.parse(location.search)

	const heroes = getHeroesByName({ name: q })

	return (
		<>
			<div>
				<TitlePage title='Search'>
					{q.length > 0 && (
						<p className='text-sm text-gray-400'>Results for: {q}</p>
					)}
				</TitlePage>
			</div>

			<div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4'>
				{q.length === 0 && <Message type='info' />}

				{heroes.length === 0 && q.length > 0 && <Message type='warning' />}

				{heroes.map((hero) => (
					<HeroCard key={hero.id} {...hero} />
				))}
			</div>
		</>
	)
}
