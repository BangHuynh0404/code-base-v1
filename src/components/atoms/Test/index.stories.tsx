import { ComponentStory, ComponentMeta } from '@storybook/react';
import { withRouter } from 'storybook-addon-react-router-v6';
import React from 'react';

import Test from '.';

export default {
  title: 'Components/atoms/Test',
  component: Test,
  decorators: [withRouter],
  parameters: {
    layout: 'centered',
  },
  argTypes: {},
} as ComponentMeta<typeof Test>;

const Template: ComponentStory<typeof Test> = (args) => <Test {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
