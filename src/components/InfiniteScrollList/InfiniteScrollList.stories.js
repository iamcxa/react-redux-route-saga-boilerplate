import PropTypes from 'prop-types';

import Assets from '~/assets';

import InfiniteScrollList from './index';

export default {
  title: 'InfiniteScrollList',
  component: InfiniteScrollList,
  argTypes: {
    // color: { control: 'color' },
  },
};

// 👇 We create a “template” of how args map to rendering
const Template = (args) => <InfiniteScrollList {...args} />;

export const Default = Template.bind({});

Default.args = {
};
