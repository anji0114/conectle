import { rootUrl } from './url';

export const siteConfig = {
  title: '個人開発をサポートするアプリ',
  description: '個人開発をサポートし合えるアプリです',
  url: rootUrl,
  ogpImage: {
    url: `${rootUrl}/ogp.png`,
    width: 1200,
    height: 630,
  },
  icon: {
    favicon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
};
