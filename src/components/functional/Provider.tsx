'use client';

import type { FC, ReactNode } from 'react';
import { SWRConfig } from 'swr';

export const Provider: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <SWRConfig
      value={{
        fetcher: (url) => fetch(url).then((res) => res.json()),
        refreshInterval: 3000,
      }}
    >
      {children}
    </SWRConfig>
  );
};
