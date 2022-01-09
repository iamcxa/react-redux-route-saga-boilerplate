import { Input } from './index';

export default {
  title: 'Exam/Input',
  component: Input,
  argTypes: {},
};

const Template = (args) => <Input {...args} />;

export const Normal = Template.bind({});

Normal.args = {
  width: 725,
  autoFocus: false,
  placeholder: 'keyword',
  value: '',
};

export const Focused = Template.bind({});

Focused.args = {
  width: 725,
  autoFocus: true,
  value: 'key',
};
