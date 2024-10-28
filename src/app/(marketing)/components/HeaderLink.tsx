'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { FC } from 'react';
import { useMemo } from 'react';
import { twMerge } from 'tailwind-merge';

type THeaderLinkProps = {
  href: string;
  text: string;
};

export const HeaderLink: FC<THeaderLinkProps> = ({ href, text }) => {
  const pathname = usePathname();

  const isCurrent = useMemo(() => {
    return href === pathname;
  }, [href, pathname]);

  return (
    <Link
      className={twMerge('', isCurrent ? 'text-blue-600' : 'text-gray-900')}
      href={href}
    >
      {text}
    </Link>
  );
};
