import { useParams, Navigate } from 'react-router-dom'
import { getHeroById } from '../helpers'
import { HeroesCarousel, HeroInfo } from '../components'
import { Separator } from '../../ui'

export const HeroPage = () => {
	const { id } = useParams()
	const hero = getHeroById({ id })

	if (!hero) {
		return <Navigate to='/' />
	}

	const { publisher } = hero

	return (
		<>
			<HeroInfo {...hero} />

			<Separator className='bg-gray-300/50 h-1 mb-4' />

			<HeroesCarousel publisher={publisher} current={id} />
		</>
	)
}
