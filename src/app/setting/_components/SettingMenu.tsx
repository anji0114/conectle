'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/libs/cn';

export const SettingMenu = () => {
  const pathname = usePathname();

  return (
    <ul className='space-y-2'>
      <SettingMenuItem
        label='プロフィール'
        href='/setting/profile'
        isCurrent={pathname === '/setting/profile'}
      />
      <SettingMenuItem
        label='メールアドレス'
        href='/setting/email'
        isCurrent={pathname === '/setting/email'}
      />
      <SettingMenuItem
        label='アカウント'
        href='/setting/account'
        isCurrent={pathname === '/setting/account'}
      />
    </ul>
  );
};

type SettingMenuItemProps = {
  label: string;
  href: string;
  isCurrent?: boolean;
};

const SettingMenuItem = ({ label, href, isCurrent }: SettingMenuItemProps) => {
  return (
    <li className={cn('rounded', isCurrent && 'bg-foreground/5')}>
      <Link
        className={cn(
          'block px-4 py-2 font-bold text-foreground/60 transition-colors duration-300 hover:text-foreground',
          isCurrent && 'text-foreground',
        )}
        href={href}
      >
        {label}
      </Link>
    </li>
  );
};
