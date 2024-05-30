import Button from '../components/Button/Button';

export default {
	title: 'Example/Button',
	component: Button,
	parameters: {
		layout: 'centered',
	},
};

export const Primary = {
	args: {
		primary: true,
		label: 'Button',
	},
};
