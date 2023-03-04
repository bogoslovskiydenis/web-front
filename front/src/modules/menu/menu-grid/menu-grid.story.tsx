import { ComponentStory, ComponentMeta } from '@storybook/react'
import { MenuGrid } from './menu-grid.component'
import testJson from '../../../test-json.json'


export default {
	title: 'Menu/Menu Grid',
	component: MenuGrid
} as ComponentMeta<typeof MenuGrid>

const Template: ComponentStory<typeof MenuGrid> = (args) => <MenuGrid {...args}/>

export const View = Template.bind({})
View.args={
	items: testJson,
}
