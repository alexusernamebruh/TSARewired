'use client';
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { RefObject } from 'react';

interface ScrollToTargetDiv {
  (target: RefObject<HTMLElement | null>): void;
}

interface NavbarProps {
  navItems: { name: string; ref: RefObject<HTMLElement | null> }[];
}

const scrollToTargetDiv: ScrollToTargetDiv = (target) => {
  target.current?.scrollIntoView({ behavior: 'smooth' });
};

export default function Navbar({ navItems }: NavbarProps) {
  return (
    <div className='h-fit w-full flex py-6 pl-6 pr-8'>
      <img src='/TSALogo.png' alt='TSA Logo' className='h-12' />
      <div className='font-semibold text-xl mt-3 text-white ml-auto'>
        <Popover className='relative'>
          <PopoverButton className='focus:outline-none hover:cursor-pointer inline-flex items-center gap-x-1 text-2xl font-semibold text-white'>
            <span>Menu</span>
            <ChevronDownIcon aria-hidden='true' className='size-8' />
          </PopoverButton>
          <PopoverPanel
            transition
            className='absolute left-1/2 z-10 mt-5 flex w-screen max-w-min -translate-x-1/2 px-4 transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in'
          >
            <div className='w-36 shrink rounded-xl bg-white text-sm/6 font-semibold text-gray-900 shadow-lg ring-1 ring-gray-900/5'>
              {navItems.map((item, i) => (
                <a
                  key={item.name}
                  className={`block hover:cursor-pointer p-2 hover:text-blue-700 text-center ${
                    i !== navItems.length - 1 && 'border-b border-gray-200'
                  }`}
                  onClick={() => scrollToTargetDiv(item.ref)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </PopoverPanel>
        </Popover>
      </div>
    </div>
  );
}
