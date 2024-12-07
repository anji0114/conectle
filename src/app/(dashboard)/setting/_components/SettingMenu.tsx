'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { ReactNode } from 'react';
import { UserIcon } from '@heroicons/react/24/outline';
import { cn } from '@/libs/cn';

export const SettingMenu = () => {
  const pathname = usePathname();

  return (
    <ul className='space-y-1'>
      <SettingMenuItem
        label='プロフィール'
        href='/setting/profile'
        isCurrent={pathname === '/setting/profile'}
        icon={<UserIcon />}
      />
      {/* <SettingMenuItem
        label='メールアドレス'
        href='/setting/email'
        isCurrent={pathname === '/setting/email'}
        icon={<EnvelopeIcon />}
      />
      <SettingMenuItem
        label='アカウント'
        href='/setting/account'
        isCurrent={pathname === '/setting/account'}
        icon={<KeyIcon />}
      /> */}
    </ul>
  );
};

type SettingMenuItemProps = {
  label: string;
  href: string;
  isCurrent?: boolean;
  icon: ReactNode;
};

const SettingMenuItem = ({
  label,
  href,
  isCurrent,
  icon,
}: SettingMenuItemProps) => {
  return (
    <li
      className={cn(
        'rounded text-slate-500 hover:bg-slate-50',
        isCurrent && 'bg-slate-100 text-slate-900 hover:bg-slate-100',
      )}
    >
      <Link
        className='flex items-center gap-2 px-4 py-3 font-bold transition-colors duration-300'
        href={href}
      >
        <span className='block size-6'>{icon}</span>
        {label}
      </Link>
    </li>
  );
};
