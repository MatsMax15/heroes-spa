import { Fade } from 'react-awesome-reveal'
import { Link } from 'react-router-dom'

const CaractersByHero = ({ alter_ego, characters }) => {
	return (
		alter_ego != characters && (
			<p className='text-gray-400 text-sm'>{characters}</p>
		)
	)
}

export const HeroCard = ({
	id,
	superhero,
	alter_ego,
	first_appearance,
	characters,
}) => {
	const heroImage = `./assets/heroes/${id}.jpg`

	return (
		<>
			<Fade duration={300} direction='up' triggerOnce={true}>
				<div className='flex flex-row shadow bg-slate-100 shadow-gray-300 rounded-xl hover:shadow-lg transition duration-300 hover:shadow-gray-400 border border-gray-300/60'>
					<img
						src={heroImage}
						alt={superhero}
						className='w-32 object-cover rounded-l-xl'
					/>

					<div className='flex flex-col justify-between w-full p-4'>
						<div>
							<h2 className='text-gray-500 text-2xl mb-2'>{superhero}</h2>

							<p className='text-gray-500 text-sm'>{alter_ego}</p>

							<p className='text-gray-400 text-sm mb-2'>{first_appearance}</p>

							<CaractersByHero alter_ego={alter_ego} characters={characters} />
						</div>

						<Link to={`/hero/${id}`} className='text-blue-400 text-xs'>
							More...
						</Link>
					</div>
				</div>
			</Fade>
		</>
	)
}
