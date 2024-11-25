'use client';

import type { FC, ReactNode } from 'react';
import { SWRConfig } from 'swr';
import { fetcher } from '@/libs/api';

export const Provider: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <SWRConfig
      value={{
        fetcher,
        refreshInterval: 300000,
        shouldRetryOnError: false,
        revalidateOnFocus: false,
      }}
    >
      {children}
    </SWRConfig>
  );
};
