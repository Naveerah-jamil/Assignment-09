import React from 'react';
import Image from 'next/image';

const Footer: React.FC = () => {
  return (
    <footer className='flex flex-col md:flex-row mx-10 gap-8'>
      <div className='w-full md:w-1/3'>
        <Image
          src="/photo3.jpg"
          alt="Image 3"
          className='object-cover'
          width={400}
          height={400}
        />
      </div>
      <div className='w-full md:w-1/3'>
        <Image
          src="/photo4.jpg"
          alt="Image 4"
          className='object-cover'
          width={400}
          height={500}
        />
      </div>
      <div className='w-full md:w-1/3'>
        <Image
          src="/photo5.jpg"
          alt="Image 5"
          className='object-cover'
          width={400}
          height={400}
        />
      </div>
    </footer>
  );
};

export default Footer;

