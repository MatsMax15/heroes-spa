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

export const IMoodPuzzled = () => {
	return (
		<svg {...PropsIcons}>
			<path stroke='none' d='M0 0h24v24H0z' fill='none' />
			<path d='M14.986 3.51a9 9 0 1 0 1.514 16.284c2.489 -1.437 4.181 -3.978 4.5 -6.794' />
			<path d='M10 10h.01' />
			<path d='M14 8h.01' />
			<path d='M12 15c1 -1.333 2 -2 3 -2' />
			<path d='M20 9v.01' />
			<path d='M20 6a2.003 2.003 0 0 0 .914 -3.782a1.98 1.98 0 0 0 -2.414 .483' />
		</svg>
	)
}

export const IMoodX = () => {
	return (
		<svg {...PropsIcons}>
			<path stroke='none' d='M0 0h24v24H0z' fill='none' />
			<path d='M20.983 12.556a9 9 0 1 0 -8.433 8.427' />
			<path d='M9 10h.01' />
			<path d='M15 10h.01' />
			<path d='M9.5 15c.658 .64 1.56 1 2.5 1c.194 0 .386 -.015 .574 -.045' />
			<path d='M21.5 21.5l-5 -5' />
			<path d='M16.5 21.5l5 -5' />
		</svg>
	)
}
