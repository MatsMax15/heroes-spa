import { useMemo } from 'react'
import { Link } from 'react-router-dom'
import { Fade } from 'react-awesome-reveal'

import { getHeroesCarousel } from '../helpers'
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '../../ui/components'
import { cn } from '../../lib/utils'

export const HeroesCarousel = ({ publisher, current }) => {
	const heroes = useMemo(
		() => getHeroesCarousel({ publisher, id: current }),
		[publisher, current]
	)

	return (
		<>
			<div className='relative flex items-center justify-center w-full border-t-2 border-gray-400/40'>
				<Carousel
					opts={{
						align: 'start',
					}}
					className='w-[calc(100%-7rem)]'
				>
					<CarouselContent>
						{heroes.map((heroe, index) => (
							<CarouselItem
								key={index}
								className='basis-1/2 md:basis-1/3 lg:basis-1/5 flex justify-center'
							>
								<Link
									to={`/hero/${heroe.id}`}
									className='rounded-xl p-4 w-28 group'
								>
									<Fade triggerOnce>
										<img
											src={`./../assets/heroes/${heroe.id}.jpg`}
											alt={heroe.superhero}
											className={cn(
												'w-20 rounded-xl shadow-sm shadow-black group-hover:shadow-md group-hover:shadow-black hover:filter-none',
												{
													'filter grayscale-[70%] brightness-75':
														current !== heroe.id,
												}
											)}
										/>
									</Fade>
								</Link>
							</CarouselItem>
						))}
					</CarouselContent>
					<CarouselPrevious />
					<CarouselNext />
				</Carousel>
			</div>
		</>
	)
}
