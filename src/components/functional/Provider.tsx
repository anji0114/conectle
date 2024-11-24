'use client';

import type { FC, ReactNode } from 'react';
import { SWRConfig } from 'swr';
import { fetcher } from '@/libs/api';

export const Provider: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <SWRConfig
      value={{
        fetcher,
        onError: (error) => {
          console.log(error);
        },
      }}
    >
      {children}
    </SWRConfig>
  );
};
