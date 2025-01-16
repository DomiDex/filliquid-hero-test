'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import MobileNav from '../ui/MobileNav';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  onHover: () => void;
}

const NavLink = ({ href, children, onHover }: NavLinkProps) => {
  return (
    <Link
      className='relative h-8 px-3 flex items-center justify-center'
      href={href}
      onMouseEnter={onHover}
    >
      <span className='relative z-10 text-sm font-medium text-white whitespace-nowrap'>
        {children}
      </span>
    </Link>
  );
};

export default function Nav() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const [linkPositions, setLinkPositions] = useState<
    { left: number; width: number }[]
  >([]);

  useEffect(() => {
    const updatePositions = () => {
      if (navRef.current) {
        const links = Array.from(navRef.current.querySelectorAll('a'));
        const navRect = navRef.current.getBoundingClientRect();

        // Force a reflow to ensure accurate measurements
        requestAnimationFrame(() => {
          const positions = links.map((link) => {
            const rect = link.getBoundingClientRect();
            return {
              left: rect.left - navRect.left,
              width: rect.width,
            };
          });

          setLinkPositions(positions);
        });
      }
    };

    // Initial calculation
    updatePositions();

    // Add resize listener
    window.addEventListener('resize', updatePositions);

    // Add intersection observer to detect visibility changes
    const observer = new IntersectionObserver(updatePositions);
    if (navRef.current) {
      observer.observe(navRef.current);
    }

    return () => {
      window.removeEventListener('resize', updatePositions);
      observer.disconnect();
    };
  }, []);

  // Update positions when component mounts and after any state changes
  useEffect(() => {
    const timer = setTimeout(() => {
      if (navRef.current) {
        const links = Array.from(navRef.current.querySelectorAll('a'));
        const navRect = navRef.current.getBoundingClientRect();

        const positions = links.map((link) => {
          const rect = link.getBoundingClientRect();
          return {
            left: rect.left - navRect.left,
            width: rect.width,
          };
        });

        setLinkPositions(positions);
      }
    }, 0);

    return () => clearTimeout(timer);
  }, [activeIndex]);

  const handleHover = (index: number) => {
    setActiveIndex(index);
  };

  const handleMouseLeave = () => {
    setActiveIndex(null);
  };

  return (
    <>
      <nav
        ref={navRef}
        className='hidden lg:flex h-10 items-center bg-gray-900 px-2 rounded-full border border-gray-700 relative'
        onMouseLeave={handleMouseLeave}
      >
        <motion.div
          className='absolute bg-dodger-blue-500 rounded-full'
          initial={false}
          animate={{
            opacity: activeIndex !== null ? 1 : 0,
            left:
              activeIndex !== null && linkPositions[activeIndex]
                ? linkPositions[activeIndex].left
                : 0,
            width:
              activeIndex !== null && linkPositions[activeIndex]
                ? linkPositions[activeIndex].width
                : 0,
            height: '30px',
            scale: activeIndex !== null ? 1 : 0.95,
          }}
          style={{
            zIndex: 1,
            top: '10%',
            transform: 'translateY(-50%)',
            pointerEvents: 'none',
          }}
        />
        <NavLink href='/' onHover={() => handleHover(0)}>
          Home
        </NavLink>
        <NavLink href='/about' onHover={() => handleHover(1)}>
          Services
        </NavLink>
        <NavLink href='/contact' onHover={() => handleHover(2)}>
          Blog
        </NavLink>
        <NavLink href='/contact' onHover={() => handleHover(3)}>
          Partners
        </NavLink>
        <NavLink href='/contact' onHover={() => handleHover(4)}>
          Docs
        </NavLink>
        <NavLink href='/contact' onHover={() => handleHover(5)}>
          Audit
        </NavLink>
      </nav>

      <button
        className='lg:hidden p-2 text-white'
        onClick={() => setIsMobileMenuOpen(true)}
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
            d='M4 6h16M4 12h16M4 18h16'
          />
        </svg>
      </button>

      <MobileNav
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
}
