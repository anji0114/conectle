import Image from 'next/image';
import type { FC } from 'react';
import { twMerge } from 'tailwind-merge';

type TSocialAuthButtonProps = {
  socialType: 'github' | 'google';
  authType: 'login' | 'register';
};

const buttonStyle = {
  google: 'bg-gray-200 border border-gray-400',
  github: 'bg-gray-600 text-white',
} as const;

export const SocialAuthButton: FC<TSocialAuthButtonProps> = ({
  socialType,
  authType,
}) => {
  return (
    <button
      className={twMerge(
        'flex h-10 w-full items-center justify-center gap-4 rounded',
        buttonStyle[socialType],
      )}
    >
      <Image
        src={
          socialType === 'github'
            ? '/images/auth/github.svg'
            : socialType === 'google'
              ? '/images/auth/google.svg'
              : ''
        }
        alt={authType}
        width={20}
        height={20}
        className='size-5'
      />
      <span className='text-sm font-bold'>
        {socialType === 'google' && 'Google'}
        {socialType === 'github' && 'Github'}で
        {authType === 'login' && 'ログイン'}
        {authType === 'register' && '新規登録'}
      </span>
    </button>
  );
};
