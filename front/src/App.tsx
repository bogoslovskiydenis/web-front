import testJson from './test-json.json'
import { Header } from './common/components/header/header.component'
import { MenuGrid } from './modules/menu/menu-grid/menu-grid.component'
import { Footer } from './common/components/footer/footer.component'


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
