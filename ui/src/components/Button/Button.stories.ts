import Button from './Button';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Button> = {
	component: Button,
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Basic: Story = {
	args: {
		title: 'Click me',
	},
};
