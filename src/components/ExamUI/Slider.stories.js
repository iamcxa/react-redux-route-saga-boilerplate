import { Slider } from './index';

export default {
  title: 'Exam/Slider',
  component: Slider,
  argTypes: {},
  parameters: { actions: { argTypesRegex: '^on.*' } },
};

const Template = (args) => <Slider {...args} />;

export const Default = Template.bind({});

Default.args = {
  // value: 40,
  defaultValue: 40,
  min: 3,
  max: 50,
  step: null,
  marks: [
    {
      value: 10,
      label: 3,
    },
    {
      value: 20,
      label: 6,
    },
    {
      value: 30,
      label: 9,
    },
    {
      value: 40,
      label: 15,
    },
    {
      value: 50,
      label: 50,
    },
  ],
  getAriaValueText: (v) => v,
  width: 600,
};
