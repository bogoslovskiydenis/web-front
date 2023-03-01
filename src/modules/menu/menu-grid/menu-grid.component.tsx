import MenuItem from '../menu-item/menu-item.component'
import { ItemMenu } from '@app/modules/types/item-menu'
import { FC } from 'react'

interface MenuListProps {
	items: ItemMenu[]
}

export const MenuGrid: FC<MenuListProps> = ({items}) => {
	return <div className='flex flex-wrap gap-10 justify-center'>
		{items.map(({ imagePath, ...testJson }) => (
			<MenuItem {...testJson} imagePath={'/assets/' + imagePath} key={`testJson-${testJson.id}`} />))}
	</div>
}