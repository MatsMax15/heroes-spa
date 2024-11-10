import { Link } from 'react-router-dom'
import { getHeroesCarousel } from '../helpers'
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '../../ui/components'

export const HeroesCarousel = ({ publisher, current }) => {
	const heroes = getHeroesCarousel({ publisher, id: current })

	return (
		<>
			<div className='relative flex items-center justify-center w-full'>
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
									<img
										src={`./../assets/heroes/${heroe.id}.jpg`}
										alt={heroe.superhero}
										className='w-20 rounded-xl shadow-sm shadow-black group-hover:shadow-md group-hover:shadow-black transition duration-300'
									/>
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
