import { Admin, DataProvider, EditGuesser, ListGuesser, Loading, Resource } from 'react-admin'
import { CssBaseline } from '@mui/material'
import { useEffect, useState } from 'react'
import buildHasuraProvider from 'ra-data-hasura'
import { MenuList } from './modules/components/menu/menu-list.components'
import { MenuEdit } from './modules/components/menu/menu-edit.component'
import { MenuCreate } from './modules/components/menu/menu-create.component'
import { authProvider } from './provider/authProvider'

export function App() {
	const [dataProvider, setDataProvider] = useState<DataProvider<string> | null>(null)
	useEffect(() => {
		const buildDataProvider = async () => {
			const dataProvider = await buildHasuraProvider({
				clientOptions: {
					uri: 'http://localhost:8080/v1/graphql'
				}
			})
			setDataProvider(dataProvider)
		}
		buildDataProvider()
	}, [])

	if (!dataProvider) {
		return <Loading />
	}


	return (
		<>
			<CssBaseline />
			<Admin dataProvider={dataProvider} authProvider={authProvider} requireAuth >

				<Resource name="menu" list={MenuList} edit={MenuEdit} create={MenuCreate}/>
			</Admin>
		</>
	)
}

export default App
