import localFont from 'next/font/local';

export const customFont = localFont({
  src: [
    {
      path: '../../public/fonts/your-font-regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/your-font-medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/your-font-bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-custom',
});
