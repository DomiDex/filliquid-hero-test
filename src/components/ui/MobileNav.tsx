'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileNav({ isOpen, onClose }: MobileNavProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className='fixed inset-0 bg-black/60 z-40 lg:hidden'
            onClick={onClose}
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 20 }}
            className='fixed right-0 top-0 bottom-0 w-64 bg-gray-900 z-50 lg:hidden'
          >
            <div className='flex flex-col p-4'>
              <button
                onClick={onClose}
                className='self-end p-2 text-gray-400 hover:text-white'
              >
                <svg
                  className='w-6 h-6'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M6 18L18 6M6 6l12 12'
                  />
                </svg>
              </button>
              <nav className='flex flex-col gap-4 mt-8'>
                <Link
                  href='/'
                  className='text-white hover:text-dodger-blue-400 px-4 py-2'
                  onClick={onClose}
                >
                  Home
                </Link>
                <Link
                  href='/about'
                  className='text-white hover:text-dodger-blue-400 px-4 py-2'
                  onClick={onClose}
                >
                  Services
                </Link>
                <Link
                  href='/contact'
                  className='text-white hover:text-dodger-blue-400 px-4 py-2'
                  onClick={onClose}
                >
                  Blog
                </Link>
                <Link
                  href='/contact'
                  className='text-white hover:text-dodger-blue-400 px-4 py-2'
                  onClick={onClose}
                >
                  Partners
                </Link>
                <Link
                  href='/contact'
                  className='text-white hover:text-dodger-blue-400 px-4 py-2'
                  onClick={onClose}
                >
                  Docs
                </Link>
                <Link
                  href='/contact'
                  className='text-white hover:text-dodger-blue-400 px-4 py-2'
                  onClick={onClose}
                >
                  Audit
                </Link>
              </nav>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
