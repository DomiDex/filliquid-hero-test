'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, useSpring } from 'framer-motion';
import { useState, useEffect } from 'react';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

const NavLink = ({ href, children }: NavLinkProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const x = useSpring(0, { stiffness: 150, damping: 15 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const mouseX = e.clientX - rect.left - rect.width / 2;
    x.set(mouseX);
  };

  useEffect(() => {
    if (!isHovered) {
      x.set(0);
    }
  }, [isHovered, x]);

  return (
    <Link
      className='px-4  rounded-full overflow-hidden relative text-white'
      href={href}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <p className='relative z-10 text-md font-medium'>{children}</p>
      <motion.div
        className='absolute inset-0 bg-dodger-blue-500'
        initial={{ opacity: 0, scale: 0 }}
        animate={{
          opacity: isHovered ? 1 : 0,
          scale: isHovered ? 1.5 : 0,
        }}
        transition={{
          duration: 0.2,
          ease: 'easeOut',
        }}
        style={{
          zIndex: 0,
          borderRadius: '9999px',
          x,
          y: 0,
        }}
      />
    </Link>
  );
};

export default function Header() {
  return (
    <header className='py-4'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex h-16 items-center justify-between'>
          <Image src='/image/logo.png' alt='Logo' width={100} height={100} />
          <nav className='flex items-center space-x-4 bg-gray-900 px-4 py-2 rounded-full border border-gray-700'>
            <NavLink href='/'>Home</NavLink>
            <NavLink href='/about'>About</NavLink>
            <NavLink href='/contact'>Contact</NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
}
