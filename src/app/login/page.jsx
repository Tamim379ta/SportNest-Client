import Image from 'next/image';
import React from 'react';

const LoginPage = () => {
  return (
    <div className='mt-20  container mx-auto p-10 bg-[#f8fff6]'>
      

      <div>
        <Image
        className='h-150 object-cover'
        src={'/assets/login.jfif'}
        alt='Login Page'
        width={500}
        height={500}
        />
      </div>
    </div>
  );
};

export default LoginPage;