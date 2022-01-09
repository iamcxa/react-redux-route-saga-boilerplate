import Tag from './Tag';

export default {
  title: 'Page/Exam/Tag',
  component: Tag,
  argTypes: {
    // color: { control: 'color' },
  },
};

// 👇 We create a “template” of how args map to rendering
const Template = (args) => <Tag {...args} />;

export const Default = Template.bind({});

Default.args = {};
