import { Meta } from '@storybook/react';
import { SimpleButton } from './SimpleButton';

const meta = {
  title: 'components/ui/Button/SimpleButton',
  component: SimpleButton,
  tags: ['autodocs'],
  args: {},
} satisfies Meta<typeof SimpleButton>;

export default meta;

export const Base = {};
