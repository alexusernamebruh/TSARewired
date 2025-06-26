'use client';
import { useRef } from 'react';
import Navbar from './components/navbar';

export default function Home() {
  const ourMissionRef = useRef<HTMLElement>(null);
  const officerCandidatesRef = useRef<HTMLElement>(null);
  const eventResourcesRef = useRef<HTMLElement>(null);
  const applyForResourcesRef = useRef<HTMLElement>(null);
  const contactUsRef = useRef<HTMLElement>(null);

  return (
    <div className='flex flex-col h-screen w-screen overflow-auto'>
      <div className='bg-[url("/landingBG.webp")] flex flex-col bg-cover w-full h-full'>
        <div className='absolute w-full'>
          <Navbar
            navItems={[
              { name: 'Our Mission', ref: ourMissionRef },
              { name: 'Officer Candidates', ref: officerCandidatesRef },
              { name: 'Event Resources', ref: eventResourcesRef },
              { name: 'Apply for Resources', ref: applyForResourcesRef },
              { name: 'Contact Us', ref: contactUsRef },
            ]}
          />
        </div>
        <div className='justify-center items-center flex flex-col h-full'>
          <p className='text-6xl font-bold text-white'>South Western TSA</p>
          <p className='text-3xl mt-2 font-bold text-white'>
            Technology leaders of tomorrow
          </p>
        </div>
      </div>
    </div>
  );
}
