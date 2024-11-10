import { useParams, Navigate } from 'react-router-dom'
import { getHeroById } from '../helpers'
import { HeroesCarousel, HeroInfo } from '../components'
import { useMemo } from 'react'

export const HeroPage = () => {
	const { id } = useParams()
	const hero = useMemo(() => getHeroById({ id }), [id])

	if (!hero) {
		return <Navigate to='/' />
	}

	const { publisher } = hero

	return (
		<>
			<div className='flex flex-col justify-between min-h-[calc(100svh-7rem)]'>
				<HeroInfo {...hero} />

				<HeroesCarousel publisher={publisher} current={id} />
			</div>
		</>
	)
}
