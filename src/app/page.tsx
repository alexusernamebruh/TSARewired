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
    <div className='flex flex-col h-full min-h-screen w-screen overflow-auto'>
      <div className='bg-[url("/landingBG.webp")] flex flex-col bg-cover w-full h-screen'>
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
          <p className='text-6xl font-bold text-white'>TSA Rewired</p>
          <p className='text-3xl mt-2 font-bold text-white'>
            Technology leaders of tomorrow
          </p>
        </div>
      </div>
      <div className='flex py-12 max-h-screen w-full h-full px-6 items-center'>
        <div className='w-full h-full flex items-center justify-center border border-gray-200 rounded-lg shadow-md'>
          <div className='flex flex-col w-3/8 px-12 justify-center items-center'>
            <p className='text-2xl font-semibold'>Our Mission</p>
            <p className='text-lg text-center'>
              TSA Rewired seeks to increase student involvement in the
              Technology Student Association.
              <br /> We want better fundraising opportunities, to help new
              members reach their full potential, and to reunify the community.
              <br />
              Help us by subscribing and you will get access to early event
              specifications and resources from dozens of TSA veterans.
            </p>
          </div>
          <div className='w-5/8 p-8 border-l border-gray-200 bg-gradient-to-r from-blue-100 to-blue-500 rounded-r-lg'>
            <img
              src='https://cdn.pixabay.com/photo/2010/12/01/space-shuttle-774_1280.jpg'
              className='rounded-lg'
            />
          </div>
        </div>
      </div>
    </div>
  );
}
