import { Noto_Sans_JP } from 'next/font/google';
import { type Metadata } from 'next';
import '@/styles/globals.css';
import { QueryProvider } from '@/components/providers/queryProvider';
import { siteConfig } from '@/configs/site';
import { rootUrl } from '@/configs/url';

const notoSans = Noto_Sans_JP({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.title}`,
  },
  description: siteConfig.description,
  metadataBase: new URL(rootUrl),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    siteName: siteConfig.title,
    url: rootUrl,
    title: {
      default: siteConfig.title,
      template: `%s | ${siteConfig.title}`,
    },
    description: siteConfig.description,
    images: {
      url: siteConfig.ogpImage.url,
      width: siteConfig.ogpImage.width,
      height: siteConfig.ogpImage.height,
    },
  },
  twitter: {
    card: 'summary_large_image',
    title: {
      default: siteConfig.title,
      template: `%s | ${siteConfig.title}`,
    },
    description: siteConfig.description,
    images: {
      url: siteConfig.ogpImage.url,
      width: siteConfig.ogpImage.width,
      height: siteConfig.ogpImage.height,
    },
  },
  icons: {
    icon: siteConfig.icon.favicon,
    apple: siteConfig.icon.apple,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ja' suppressHydrationWarning={true}>
      <body className={notoSans.className}>
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  );
}
