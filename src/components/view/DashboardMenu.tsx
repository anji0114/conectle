'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { FC, ReactNode } from 'react';
import {
  ChatBubbleLeftRightIcon,
  ClipboardDocumentListIcon,
  EnvelopeIcon,
  EnvelopeOpenIcon,
  FireIcon,
  FolderPlusIcon,
  HomeIcon,
  LockClosedIcon,
  UserIcon,
} from '@heroicons/react/24/outline';
import { cn } from '@/libs/cn';

export const DashboardMenu = () => {
  const pathname = usePathname();

  return (
    <div className='w-[200px] space-y-2'>
      <ul className='space-y-1 px-1.5'>
        <MenuItem
          href='/dashboard'
          title='ダッシュボード'
          icon={<HomeIcon />}
          isActive={pathname === '/dashboard'}
        />
      </ul>
      <div className='border-t border-slate-200' />
      <ul className='space-y-1 px-1.5'>
        <MenuItem
          href='/dashboard/projects'
          title='プロジェクト管理'
          icon={<FireIcon />}
          isActive={pathname === '/dashboard/projects'}
        >
          <ul className='pl-2'>
            <MenuItem
              href='/projects/new'
              title='プロジェクト作成'
              icon={<FolderPlusIcon />}
              isActive={pathname === '/projects/new'}
              type='sub'
            />
          </ul>
        </MenuItem>

        <MenuItem
          href='/dashboard/offers'
          title='募集管理'
          icon={<ClipboardDocumentListIcon />}
          isActive={pathname === '/dashboard/offers'}
        >
          <ul className='pl-2'>
            <MenuItem
              href='/offers/new'
              title='募集作成'
              icon={<FolderPlusIcon />}
              isActive={pathname === '/offers/new'}
              type='sub'
            />
          </ul>
        </MenuItem>
        <MenuItem
          href='/dashboard/applications'
          title='応募管理'
          icon={<EnvelopeOpenIcon />}
          isActive={pathname === '/dashboard/applications'}
        />
        <MenuItem
          href='/dashboard/messages'
          title='メッセージ'
          icon={<ChatBubbleLeftRightIcon />}
          isActive={pathname === '/dashboard/messages'}
        />
      </ul>
      <div className='border-t border-slate-200' />
      <ul className='space-y-1 px-1.5'>
        <MenuItem
          href='/setting/profile'
          title='プロフィール編集'
          icon={<UserIcon />}
          isActive={pathname === '/setting/profile'}
        />
        <MenuItem
          href='/setting/mail'
          title='メール設定'
          icon={<EnvelopeIcon />}
          isActive={pathname === '/setting/mail'}
        />
        <MenuItem
          href='/setting/password'
          title='パスワード変更'
          icon={<LockClosedIcon />}
          isActive={pathname === '/setting/password'}
        />
      </ul>
      <div className='border-t border-slate-200' />
    </div>
  );
};

type MenuItemProps = {
  href: string;
  title: string;
  icon: ReactNode;
  type?: 'main' | 'sub';
  isActive?: boolean;
  children?: ReactNode;
};

const MenuItem: FC<MenuItemProps> = ({
  href,
  title,
  icon,
  type = 'main',
  isActive,
  children,
}) => {
  return (
    <li>
      <Link
        href={href}
        className={cn(
          'group flex items-center gap-2 rounded-md px-3 py-2',
          type === 'main' ? 'hover:bg-slate-100' : 'hover:text-slate-500',
          isActive && 'bg-slate-100 text-sky-700',
        )}
      >
        <span
          className={cn(
            'size-5 text-slate-700',
            isActive && 'text-sky-700',
            type === 'sub' && 'group-hover:text-slate-500',
          )}
        >
          {icon}
        </span>
        <span className='text-sm font-medium'>{title}</span>
      </Link>
      {children}
    </li>
  );
};
