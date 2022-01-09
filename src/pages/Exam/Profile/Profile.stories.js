import Profile from './Profile';

export default {
  title: 'Page/Exam/Profile',
  component: Profile,
  argTypes: {
    // color: { control: 'color' },
  },
};

// 👇 We create a “template” of how args map to rendering
const Template = (args) => <Profile {...args} />;

export const Default = Template.bind({});

Default.args = {};
