import type { FC, ReactNode } from 'react';
import * as RadixDropdown from '@radix-ui/react-dropdown-menu';
import { cn } from '@/libs/cn';

type Props = {
  trigger: ReactNode;
  triggerClassName?: string;
  children: ReactNode;
  className?: string;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
} & Omit<RadixDropdown.DropdownMenuContentProps, 'className' | 'children'>;

export const Dropdown: FC<Props> = ({
  trigger,
  triggerClassName,
  children,
  className,
  open,
  onOpenChange,
  ...contentProps
}) => {
  return (
    <RadixDropdown.Root open={open} onOpenChange={onOpenChange}>
      <RadixDropdown.Trigger asChild className={triggerClassName}>
        {trigger}
      </RadixDropdown.Trigger>
      <RadixDropdown.Content
        {...contentProps}
        className={cn(
          'rounded border border-slate-50 bg-white shadow',
          className,
        )}
      >
        {children}
      </RadixDropdown.Content>
    </RadixDropdown.Root>
  );
};
