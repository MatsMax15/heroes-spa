const PropsIcons = {
	xmlns: 'http://www.w3.org/2000/svg',
	viewBox: '0 0 24 24',
	fill: 'none',
	stroke: 'currentColor',
	strokeWidth: '2',
	strokeLinecap: 'round',
	strokeLinejoin: 'round',
}

export const IHome = () => {
	return (
		<svg {...PropsIcons}>
			<path stroke='none' d='M0 0h24v24H0z' fill='none' />
			<path d='M5 12l-2 0l9 -9l9 9l-2 0' />
			<path d='M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7' />
			<path d='M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6' />
		</svg>
	)
}

export const IConfig = () => {
	return (
		<svg {...PropsIcons}>
			<path stroke='none' d='M0 0h24v24H0z' fill='none' />
			<path d='M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z' />
			<path d='M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0' />
		</svg>
	)
}

export const ISearch = () => {
	return (
		<svg {...PropsIcons}>
			<path stroke='none' d='M0 0h24v24H0z' fill='none' />
			<path d='M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0' />
			<path d='M21 21l-6 -6' />
		</svg>
	)
}

export const IChevronRight = () => {
	return (
		<svg {...PropsIcons}>
			<path stroke='none' d='M0 0h24v24H0z' fill='none' />
			<path d='M9 6l6 6l-6 6' />
		</svg>
	)
}

export const IChevronLeft = () => {
	return (
		<svg {...PropsIcons}>
			<path stroke='none' d='M0 0h24v24H0z' fill='none' />
			<path d='M15 6l-6 6l6 6' />
		</svg>
	)
}

export const ILeterX = () => {
	return (
		<svg {...PropsIcons}>
			<path stroke='none' d='M0 0h24v24H0z' fill='none' />
			<path d='M18 6l-12 12' />
			<path d='M6 6l12 12' />
		</svg>
	)
}

export const ILetterM = () => {
	return (
		<svg {...PropsIcons}>
			<path stroke='none' d='M0 0h24v24H0z' fill='none' />
			<path d='M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0' />
			<path d='M9 16v-8l3 5l3 -5v8' />
		</svg>
	)
}

export const ILetterD = () => {
	return (
		<svg {...PropsIcons}>
			<path stroke='none' d='M0 0h24v24H0z' fill='none' />
			<path d='M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0' />
			<path d='M10 8v8h2a2 2 0 0 0 2 -2v-4a2 2 0 0 0 -2 -2h-2z' />
		</svg>
	)
}

export const ILetterH = () => {
	return (
		<svg {...PropsIcons}>
			<path stroke='none' d='M0 0h24v24H0z' fill='none' />
			<path d='M3 3m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z' />
			<path d='M10 16v-8m4 0v8' />
			<path d='M10 12h4' />
		</svg>
	)
}
