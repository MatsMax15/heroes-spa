import { heroes } from '../data/heroes'

export const getHeroesRandom = () => {
	const heroesGroups = []
	const heroesCopy = [...heroes]

	for (let i = 0; i < 4; i++) {
		const heroesRandom = []

		for (let j = 0; j < 5; j++) {
			const randomIndex = Math.floor(Math.random() * heroesCopy.length)
			heroesRandom.push(heroesCopy[randomIndex])
			heroesCopy.splice(randomIndex, 1)
		}

		heroesGroups.push(heroesRandom)
	}

	return heroesGroups
}
