import Link from 'next/link';
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
  return (
    <div className='w-[200px] space-y-2'>
      <ul className='space-y-1 px-1'>
        <MenuItem
          href='/dashboard'
          title='ダッシュボード'
          icon={<HomeIcon />}
          isActive={true}
        />
      </ul>
      <div className='border-t border-slate-200' />
      <ul className='space-y-1 px-1'>
        <MenuItem
          href='/dashboard/projects'
          title='プロジェクト管理'
          icon={<FireIcon />}
          isActive={true}
        >
          <ul className='pl-2'>
            <MenuItem
              href='/projects/new'
              title='プロジェクト作成'
              icon={<FolderPlusIcon />}
              isActive={true}
              type='sub'
            />
          </ul>
        </MenuItem>

        <MenuItem
          href='/dashboard/offers'
          title='募集管理'
          icon={<ClipboardDocumentListIcon />}
          isActive={true}
        >
          <ul className='pl-2'>
            <MenuItem
              href='/offers/new'
              title='募集作成'
              icon={<FolderPlusIcon />}
              isActive={true}
              type='sub'
            />
          </ul>
        </MenuItem>
        <MenuItem
          href='/dashboard/applications'
          title='応募管理'
          icon={<EnvelopeOpenIcon />}
          isActive={true}
        />
        <MenuItem
          href='/dashboard/messages'
          title='メッセージ'
          icon={<ChatBubbleLeftRightIcon />}
          isActive={true}
        />
      </ul>
      <div className='border-t border-slate-200' />
      <ul className='space-y-1 px-1'>
        <MenuItem
          href='/setting/profile'
          title='プロフィール編集'
          icon={<UserIcon />}
          isActive={true}
        />
        <MenuItem
          href='/setting/mail'
          title='メール設定'
          icon={<EnvelopeIcon />}
          isActive={true}
        />
        <MenuItem
          href='/setting/password'
          title='パスワード変更'
          icon={<LockClosedIcon />}
          isActive={true}
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
          'flex items-center gap-2 rounded-md px-3 py-2',
          type === 'main' ? 'hover:bg-slate-100' : 'hover:text-slate-500',
          isActive && '',
        )}
      >
        <span className='size-5 text-slate-700'>{icon}</span>
        <span className='text-sm font-medium'>{title}</span>
      </Link>
      {children}
    </li>
  );
};
