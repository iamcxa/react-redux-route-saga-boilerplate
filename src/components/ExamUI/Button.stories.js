import { Button } from './index';

export default {
  title: 'Exam/Button',
  component: Button,
  argTypes: {
    // color: { control: 'color' },
  },
};

// 👇 We create a “template” of how args map to rendering
const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  color: 'primary',
  variant: 'normal',
  label: 'button',
};

export const Outlined = Template.bind({});

Outlined.args = {
  color: 'primary',
  variant: 'outlined',
  label: 'button',
};

export const Contained = Template.bind({});

Contained.args = {
  color: 'primary',
  variant: 'contained',
  label: 'button',
};
