import { TitlePage } from '../../ui/components'
import { HeroList } from '../components'

export const MarvelPage = () => {
	return (
		<>
			<TitlePage title='Marvel Comics' />

			<HeroList publisher='Marvel Comics' />
		</>
	)
}
