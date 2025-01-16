'use client';

import Image from 'next/image';
import Nav from './Nav';

export default function Header() {
  return (
    <header className='py-4'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex h-16 items-center justify-between'>
          <Image src='/image/logo.png' alt='Logo' width={100} height={100} />
          <Nav />
        </div>
      </div>
    </header>
  );
}
