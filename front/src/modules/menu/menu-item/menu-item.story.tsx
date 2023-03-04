import { ComponentStory, ComponentMeta } from '@storybook/react'
import MenuItem from './menu-item.component'


export default {
	title: 'Menu/Menu Item',
	component: MenuItem
} as ComponentMeta<typeof MenuItem>

const Template: ComponentStory<typeof MenuItem> = (args) => <MenuItem{...args} />

export const View = Template.bind({})
View.args = {

	imagePath: '/assets/burger.jpeg',
	weight: 555,
	title: 'Title',
	description: 'Description',
	price: 131

}