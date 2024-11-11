import { Fade } from 'react-awesome-reveal'
import { getHeroesRandom, getRandomValues } from '../helpers'
import { cn } from './../../lib/utils'
import { useSidebar } from '../../ui/components'

export const HeroesPage = () => {
	const { isMobile } = useSidebar()
	const heroesGroups = getHeroesRandom()
	const { randomDirection, randomGrayscale, ramdomSize } = getRandomValues({
		isMobile,
	})

	return (
		<div className='flex justify-center'>
			<div className='flex max-w-[1080px] h-[calc(100svh-6.5rem)] overflow-hidden rounded-xl gap-2'>
				{heroesGroups.map((group, i) => (
					<div
						key={i}
						className='flex flex-col gap-2 flex-[25%] max-w-[25%] rounded-xl'
					>
						{group.map((hero) => (
							<div key={hero.id} className={ramdomSize()}>
								<Fade
									triggerOnce
									direction={randomDirection()}
									className='w-full h-full rounded-xl object-cover object-top shadow shadow-gray-500'
								>
									<img
										src={`./assets/heroes/${hero.id}.jpg`}
										alt={hero.superhero}
										className={cn(
											'w-full h-full rounded-xl object-cover object-top filter hover:filter-none',
											randomGrayscale()
										)}
									/>
								</Fade>
							</div>
						))}
					</div>
				))}
			</div>
		</div>
	)
}
