import localFont from 'next/font/local';

export const customFont = localFont({
  src: [
    {
      path: '../../public/fonts/PPMori-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/PPMori-RegularItalic.woff2',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../../public/fonts/PPMori-SemiBold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/fonts/PPMori-SemiBoldItalic.woff2',
      weight: '700',
      style: 'italic',
    },
  ],
  variable: '--font-custom',
});
