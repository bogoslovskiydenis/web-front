import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Footer } from '../footer/footer.component'


export default {
	title: 'Common/Footer',
	component: Footer,
} as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = (args) => <Footer/>;

export const View = Template.bind({});
