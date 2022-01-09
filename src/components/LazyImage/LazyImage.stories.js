import PropTypes from 'prop-types';

import Assets from '~/assets';

import LazyImage from './index';

export default {
  title: 'LazyImage',
  component: LazyImage,
  argTypes: {
    // color: { control: 'color' },
  },
};

// 👇 We create a “template” of how args map to rendering
const Template = (args) => <LazyImage {...args} />;

export const Default = Template.bind({});

Default.args = {
};
