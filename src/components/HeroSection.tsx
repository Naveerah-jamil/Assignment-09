import React from 'react';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <main className='flex flex-col md:flex-row gap-8 mx-10'>
      <div className='w-full md:w-1/2 h-96 overflow-hidden'>
        < Image src="/photo1.jpg" alt="Kamran Khan Tesori" className='w-full h-full object-cover'
         width={400}
         height={400}
         />
      </div>
      <div className='w-full md:w-1/2 h-96 overflow-hidden'>
        < Image src="/photo2.jpg" alt="students" className='w-full h-full object-cover'
         width={400}
         height={400}
         />
      </div>
    </main>
  );
};

export default HeroSection;
