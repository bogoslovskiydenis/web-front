import { ComponentStory, ComponentMeta } from '@storybook/react'
import { MenuGrid } from './menu-grid.component'


export default {
	title: 'Menu/Menu Grid',
	component: MenuGrid
} as ComponentMeta<typeof MenuGrid>

const Template: ComponentStory<typeof MenuGrid> = (args) => <MenuGrid />

export const View = Template.bind({})
