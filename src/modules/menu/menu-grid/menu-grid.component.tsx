import testJson from '../../../test-json.json'
import  MenuItem  from '../menu-item/menu-item.component'


export const MenuGrid = () => {
	return <div className='flex flex-wrap gap-10'>
		{testJson.map(({imagePath , ...testJson}) =>(<MenuItem {...testJson } imagePath={'/assets/' +imagePath}/>) )}
	</div>
}