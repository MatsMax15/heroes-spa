import { heroes } from '../data/heroes'

export const getHeroesByName = ({ name = '' }) => {
	const trimmedName = name.trim()

	if (trimmedName === '') {
		return []
	}

	return heroes.filter((hero) =>
		hero.superhero.toLowerCase().includes(trimmedName.toLowerCase())
	)
}
