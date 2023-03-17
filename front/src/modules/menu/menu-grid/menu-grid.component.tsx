import { FC } from 'react'
import { ItemMenu } from '../../types/item-menu'
import { MenuItem } from '../menu-item/menu-item.component'

interface MenuListProps {
	items: ItemMenu[]
}

export const MenuGrid: FC<MenuListProps> = ({items}) => {
	return <div className='flex flex-wrap gap-10 justify-center'>
		{items.map(({ imagePath, ...testJson }) => (
			<MenuItem {...testJson} imagePath={'/assets/' + imagePath} key={`testJson-${testJson.id}`} />))}
	</div>
}