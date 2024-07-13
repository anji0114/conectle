import type { Metadata } from 'next';
import { Noto_Sans_JP } from 'next/font/google';
import '@/styles/globals.css';
import { twMerge } from 'tailwind-merge';

const notoSans = Noto_Sans_JP({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '個人開発をサポートするアプリ',
  description: '個人開発をサポートします！！！！！',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ja' suppressHydrationWarning={true}>
      <body className={twMerge(notoSans.className, 'text-gray-900')}>
        {children}
      </body>
    </html>
  );
}
