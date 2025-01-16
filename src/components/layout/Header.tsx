'use client';

import Image from 'next/image';
import Nav from './Nav';
import GradientButton from '@/components/ui/GradientButton';

export default function Header() {
  return (
    <header className='py-4'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex h-16 items-center justify-between'>
          <div className='flex items-center gap-2'>
            <Image src='/image/logo.png' alt='Logo' width={100} height={100} />
            <div className='lg:hidden'>
              <Nav />
            </div>
          </div>
          <div className='hidden lg:block'>
            <Nav />
          </div>
          <div className='flex items-center space-x-2'>
            <GradientButton>Earn</GradientButton>
          </div>
        </div>
      </div>
    </header>
  );
}
