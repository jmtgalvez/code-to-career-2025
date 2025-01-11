'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { IconArrowLeft, IconHome } from '@tabler/icons-react';
import { ShieldIcon, Earth, Menu, X } from 'lucide-react';
import { Sidebar, SidebarBody, SidebarLink } from '@/components/ui/sidebar';

export function SidebarCustom() {
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const linksUser = [
    {
      label: 'Dashboard',
      href: '/homepage',
      icon: (
        <IconHome className='text-blue-400 dark:text-textColor size-7 flex-shrink-0' />
      ),
    },
    {
      label: 'Places/Cities',
      href: '/places',
      icon: (
        <Earth className='text-blue-400 dark:text-textColor size-7 flex-shrink-0' />
      ),
    },

    {
      label: 'Logout',
      href: '/logout',
      icon: (
        <IconArrowLeft className='text-blue-400 dark:text-textColor size-7 flex-shrink-0' />
      ),
    },
  ];

  return (
    <>
      {isMobile ? (
        <div className='fixed top-0 left-0 z-50 w-full'>
          <div className='lg:h-screen lg:fixed flex justify-between items-center p-4 bg-white dark:bg-gray-800'>
            <Logo />
            <button
              onClick={() => setOpen(!open)}
              className='text-blue-400 dark:text-textColor'
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className='absolute top-full left-0 w-full bg-white dark:bg-gray-800 shadow-lg'
              >
                {linksUser.map((link, idx) => (
                  <Link
                    key={idx}
                    href={link.href}
                    className='flex items-center p-4 hover:bg-gray-100 dark:hover:bg-gray-700'
                    onClick={() => setOpen(false)}
                  >
                    {link.icon}
                    <span className='ml-4'>{link.label}</span>
                  </Link>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ) : (
        <div className='hidden lg:flex min-h-screen'>
          <Sidebar
            open={open}
            setOpen={setOpen}
          >
            <SidebarBody className='justify-between gap-10'>
              <div className='flex flex-col flex-1 overflow-y-auto overflow-x-hidden'>
                {open ? <Logo /> : <LogoIcon />}
                <div className='mt-8 flex flex-col gap-2'>
                  {linksUser.map((link, idx) => (
                    <SidebarLink
                      className='hover:bg-slate-800 rounded-sm'
                      key={idx}
                      link={link}
                    />
                  ))}
                </div>
              </div>
            </SidebarBody>
          </Sidebar>
        </div>
      )}
    </>
  );
}

export const Logo = () => {
  return (
    <Link
      href='#'
      className='font-normal flex space-x-2 items-center text-sm text-black dark:text-white py-1 relative z-20'
    >
      <ShieldIcon className='h-8 w-8 text-blue-400' />
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className='font-semibold text-2xl text-blue-400 dark:text-textColor whitespace-pre'
      >
        Globe Connect
      </motion.span>
    </Link>
  );
};

export const LogoIcon = () => {
  return (
    <Link
      href='#'
      className='font-normal flex space-x-2 items-center text-sm text-black dark:text-white py-1 relative z-20'
    >
      <ShieldIcon className='h-8 w-8 text-blue-400' />
    </Link>
  );
};
