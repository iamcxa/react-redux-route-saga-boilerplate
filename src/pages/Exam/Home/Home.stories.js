import Home from './Home';

export default {
  title: 'Page/Exam/Home',
  component: Home,
  argTypes: {
    // color: { control: 'color' },
  },
};

// 👇 We create a “template” of how args map to rendering
const Template = (args) => <Home {...args} />;

export const Default = Template.bind({});

Default.args = {};
