'use client';

import { createContext, useCallback, useContext, useState } from 'react';
import * as RadixToast from '@radix-ui/react-toast';
import { Toast, type ToastProps } from '@/components/ui/Toast';

type ToastParams = Omit<ToastProps, 'isOpen' | 'onOpenChange'>;

type ToastContextType = {
  openToast: (toast: ToastParams) => void;
  closeToast: () => void;
};

const ToastContext = createContext<ToastContextType>({
  openToast: () => {
    throw new Error('openToast is not implemented');
  },
  closeToast: () => {
    throw new Error('closeToast is not implemented');
  },
});

export const ToastProvider = ({ children }: { children: React.ReactNode }) => {
  const [toast, setToast] = useState<Omit<ToastProps, 'onOpenChange'> | null>(
    null,
  );

  const openToast = useCallback((toast: ToastParams) => {
    setToast((prev) => {
      if (!prev) return prev;
      return { ...prev, isOpen: false };
    });

    setTimeout(() => {
      setToast({ ...toast, isOpen: true });
    }, 100);
  }, []);

  const closeToast = useCallback(() => {
    setToast(null);
  }, []);

  const onOpenChange = useCallback((isOpen: boolean) => {
    setToast((prev) => {
      if (!prev) return prev;
      return { ...prev, isOpen };
    });
  }, []);

  return (
    <ToastContext.Provider value={{ openToast, closeToast }}>
      <RadixToast.Provider>
        {children}
        <Toast
          isOpen={!!toast?.isOpen}
          title={toast?.title}
          type={toast?.type}
          duration={toast?.duration}
          className={toast?.className}
          onOpenChange={onOpenChange}
        >
          {toast?.children}
        </Toast>
        <RadixToast.Viewport />
      </RadixToast.Provider>
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  return useContext(ToastContext);
};
