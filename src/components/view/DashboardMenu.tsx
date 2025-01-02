'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { FC, ReactNode } from 'react';

import {
  BriefcaseBusiness,
  LayoutDashboardIcon,
  LockKeyhole,
  Mail,
  Send,
  Star,
  UserPen,
} from 'lucide-react';
import { cn } from '@/libs/cn';

export const DashboardMenu = () => {
  const pathname = usePathname();

  return (
    <div className='w-64 space-y-2 border-r border-slate-200 bg-white px-2 py-6'>
      <ul className='space-y-1 px-1.5'>
        <MenuItem
          href='/dashboard'
          title='ダッシュボード'
          icon={<LayoutDashboardIcon size={20} />}
          isActive={pathname === '/dashboard'}
        />
        <MenuItem
          href='/dashboard/listings'
          title='募集管理'
          icon={<BriefcaseBusiness size={20} />}
          isActive={pathname === '/dashboard/listings'}
        />
        <MenuItem
          href='/dashboard/applicants'
          title='応募管理'
          icon={<Star size={20} />}
          isActive={pathname === '/dashboard/applicants'}
        />
        <MenuItem
          href='/messages'
          title='メッセージ'
          icon={<Send size={20} />}
          isActive={pathname === '/messages'}
        />
        <MenuItem
          href='/setting/profile'
          title='プロフィール編集'
          icon={<UserPen size={20} />}
          isActive={pathname === '/setting/profile'}
        />
        <MenuItem
          href='/setting/mail'
          title='設定'
          icon={<Mail size={20} />}
          isActive={pathname === '/setting/mail'}
        />
        <MenuItem
          href='/setting/password'
          title='パスワード管理'
          icon={<LockKeyhole size={20} />}
          isActive={pathname === '/setting/password'}
        />
      </ul>
    </div>
  );
};

type MenuItemProps = {
  href: string;
  title: string;
  icon: ReactNode;
  isActive?: boolean;
};

const MenuItem: FC<MenuItemProps> = ({ href, title, icon, isActive }) => {
  return (
    <li>
      <Link
        href={href}
        className={cn(
          'group flex items-center gap-2 rounded-md px-3 pb-2 pt-[9px] text-slate-700 hover:bg-sky-50/80',
          isActive && 'bg-sky-50 text-sky-600',
        )}
      >
        <span className='flex size-5 items-center'>{icon}</span>
        <span className='pb-px text-sm font-medium'>{title}</span>
      </Link>
    </li>
  );
};
