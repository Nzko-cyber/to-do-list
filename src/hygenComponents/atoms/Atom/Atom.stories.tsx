import React from 'react';
import { Atom } from './';
import { Story, Meta } from '@storybook/react/types-6-0';

type Props = React.ComponentProps<typeof Atom>

const csf: Meta = {
  title: 'atoms/Atom',
}

const Template: Story<Props> = (args) => <Atom {...args} />;

export const c1 = Template.bind({});
c1.storyName = 'default'

export default csf


