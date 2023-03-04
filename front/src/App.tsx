import { Header } from '@app/common/components/header/header.component'
import { MenuGrid } from '@app/modules/menu/menu-grid/menu-grid.component'
import testJson from './test-json.json'
import Footer from '@app/common/components/footer/footer.component'


export const App = () => {
	return <div>
		<Header />
		<div className='mx-12 mb-24'>
			<MenuGrid items={testJson} />
		</div>
		<Footer />
	</div>
}

export default App
