import React from 'react';
import Image from 'next/image';

const Navbar = () => {
  return (
    <div>
      <nav className='bg-blue-900 h-16 w-full flex flex-col sm:flex-row justify-between items-center p-4 fixed top-0 left-0 z-50'>
        {/* Logo */}
        <div className='h-16 w-16 ml-8'>
          <Image 
            src="/logo.9ff76f62.png" 
            alt="Logo" 
            className="h-full w-full object-contain" 
            width={64} 
            height={64} 
          />
        </div>

        <ul className='flex flex-col sm:flex-row gap-4 sm:gap-6 sm:flex hidden'>
          <li className='h-10 w-16 flex items-center justify-center text-white'>Home</li>
          <li className='h-10 w-16 flex items-center justify-center text-white'>Apply</li>
          <li className='h-10 w-16 flex items-center justify-center text-white'>Jobs</li>
          <li className='h-10 w-16 flex items-center justify-center text-white'>Courses</li>
          <li className='h-10 w-16 flex items-center justify-center text-white'>Result</li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
