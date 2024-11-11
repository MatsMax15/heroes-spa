import { Fade } from 'react-awesome-reveal'
import { TitlePage } from '../../ui/components'

export const HeroInfo = ({
	id,
	superhero,
	publisher,
	alter_ego,
	first_appearance,
	characters,
}) => {
	return (
		<>
			<section>
				<TitlePage title={superhero} />

				<div className='flex flex-col md:flex-row gap-4 mb-10 w-full'>
					<div className='w-full md:max-w-96'>
						<Fade direction='up' duration={300}>
							<img
								src={`./../assets/heroes/${id}.jpg`}
								alt={superhero}
								className='rounded-xl shadow-md shadow-black m-auto max-w-56 md:max-w-96'
							/>
						</Fade>
					</div>

					<div className='w-full md:w-[calc(100%-224px)] flex flex-col gap-6 text-center md:text-left rounded-xl text-sm p-4 md:px-4 md:pt-0 text-gray-400'>
						<div className=''>
							<p className='font-semibold text-gray-500'>Alter ego</p>
							<p className=''>{alter_ego}</p>
						</div>
						<div className=''>
							<p className='font-semibold text-gray-500'>Publisher</p>
							<p className=''>{publisher}</p>
						</div>
						<div className=''>
							<p className='font-semibold text-gray-500'>First appearance</p>
							<p className=''>{first_appearance}</p>
						</div>
						<div className=''>
							<p className='font-semibold text-gray-500'>Characters</p>
							<p className=''>{characters}</p>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
