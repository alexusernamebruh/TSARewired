'use client';
import { useRef } from 'react';
import Navbar from './components/navbar';
import { Orbitron } from 'next/font/google';
const orbitron = Orbitron({
  subsets: ['latin'],
});

export default function Home() {
  const ourMissionRef = useRef<HTMLElement>(null);
  const officerCandidatesRef = useRef<HTMLElement>(null);
  const eventResourcesRef = useRef<HTMLElement>(null);
  const applyForResourcesRef = useRef<HTMLElement>(null);
  const contactUsRef = useRef<HTMLElement>(null);

  return (
    <div className='flex flex-col h-full min-h-screen max-w-screen overflow-auto'>
      <div className='bg-[url("/landingBG.webp")] flex flex-col bg-cover w-full min-h-[85vh]'>
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
        <div
          className={`${orbitron.className} my-auto items-center flex flex-col h-full`}
        >
          <p className='text-6xl font-bold text-white flex'>TSA Rewired</p>

          <p className='text-3xl mt-2 font-bold text-white'>
            Technology leaders of tomorrow
          </p>
        </div>
      </div>
      <div className='bg-sky-50 flex py-18 max-h-screen w-full h-full px-12 items-center overflow-x-clip'>
        <div className='relative'>
          <div className='relative z-10 opacity-100 bg-white w-full h-full flex items-center justify-center border border-gray-200 rounded-lg shadow-2xl'>
            <div className='flex flex-col w-3/8 px-12 justify-center items-center'>
              <p
                className={`${orbitron.className} text-3xl font-semibold mb-8`}
              >
                Our Mission
              </p>
              <div className='text-lg space-y-4 font-semibold'>
                <ul className='list-disc space-y-8'>
                  <li>
                    TSA Rewired seeks to increase student involvement in the
                    Technology Student Association.
                  </li>
                  <li>
                    We want better fundraising opportunities, to help new
                    members reach their full potential, and to reunify the
                    community.
                  </li>
                  <li>
                    Help us by subscribing and you will get access to early
                    event specifications and resources from dozens of TSA
                    veterans.
                  </li>
                </ul>
              </div>
            </div>
            <div className='w-5/8 p-8 border-l border-gray-200 bg-gradient-to-r from-blue-100 to-blue-300 rounded-r-lg'>
              <img
                src='https://cdn.pixabay.com/photo/2010/12/01/space-shuttle-774_1280.jpg'
                className='rounded-lg'
              />
            </div>
          </div>
          <div className='absolute -mb-4 -mr-4 mt-4 ml-4 inset-0 z-0 bg-white border border-gray-200 rounded-lg' />
        </div>
      </div>
    </div>
  );
}
