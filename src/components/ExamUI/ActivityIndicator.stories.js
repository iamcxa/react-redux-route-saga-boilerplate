import { ActivityIndicator } from './index';

export default {
  title: 'ActivityIndicator',
  component: ActivityIndicator,
  argTypes: {
    // color: { control: 'color' },
  },
};

// 👇 We create a “template” of how args map to rendering
const Template = (args) => <ActivityIndicator {...args} />;

export const Default = Template.bind({});

Default.args = {};
