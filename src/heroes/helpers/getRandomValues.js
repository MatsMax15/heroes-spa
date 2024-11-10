export const getRandomValues = () => {
	const sizes = ['h-96', 'h-52', 'h-32']
	const directions = ['up', 'down', 'left', 'right']
	const grayscale = ['grayscale', 'grayscale-[25%]', 'grayscale-[50%]']

	const ramdomSize = () => {
		const randomIndex = Math.floor(Math.random() * sizes.length)
		return sizes[randomIndex]
	}

	const randomDirection = () => {
		const randomIndex = Math.floor(Math.random() * directions.length)
		return directions[randomIndex]
	}

	const randomGrayscale = () => {
		const randomIndex = Math.floor(Math.random() * grayscale.length)
		return grayscale[randomIndex]
	}

	return {
		ramdomSize,
		randomDirection,
		randomGrayscale,
	}
}
