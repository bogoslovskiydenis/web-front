import { ComponentStory, ComponentMeta } from '@storybook/react'
import testJson from '../../../test-json.json'
import { MenuGrid } from './menu-grid.component'


export default {
	title: 'Menu/Menu Grid',
	component: MenuGrid
} as ComponentMeta<typeof MenuGrid>

const Template: ComponentStory<typeof MenuGrid> = (args) => <MenuGrid {...args}/>

export const View = Template.bind({})
View.args={
	items: testJson,
}
