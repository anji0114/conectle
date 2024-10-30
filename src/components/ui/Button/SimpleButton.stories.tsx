import { SimpleButton } from './SimpleButton';
import type { Meta } from '@storybook/react';

const meta = {
  title: 'components/ui/Button/SimpleButton',
  component: SimpleButton,
  tags: ['autodocs'],
  args: {
    tag: 'button',
  },
} satisfies Meta<typeof SimpleButton>;

export default meta;

export const Base = {};
