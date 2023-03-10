import { ComponentStory, ComponentMeta } from '@storybook/react'
import { FooterLink } from './footer.link.story'

export default {
	title: 'Common/FooterLink',
	component: FooterLink
} as ComponentMeta<typeof FooterLink>

const Template: ComponentStory<typeof FooterLink> = (args) =><FooterLink {...args} />

export const View = Template.bind({})
View.args = {
	href: 'tel:+381234566',
	children: '044 123456'
}
