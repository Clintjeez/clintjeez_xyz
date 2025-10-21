import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ResourceCta = () => {
  return (
    <section className='flex h-[80px] gap-5 w-full mb-5 bg-[#18181d]'>
      <div className='bg-[#1b1c21] shadow-xl h-[150px] w-[150px] rounded-md flex items-center justify-center p-3'>
        <Image
          src='/book-sample.jpeg'
          alt=''
          width={150}
          height={150}
          className='rounded-md h-full w-full'
        />
      </div>
      <div className='w-[60%] pb-[20px]'>
        <div className='mb-4'>
          <h3 className='text-[#bfbfbf] text-[14px] font-bold leading-5'>
            [Free E-book]: Guide to building digital Products
          </h3>
          <p className='leading-5 text-[14px] text-[#777778] mt-2'>
            Get notified when I publish Something new and can unsubscribe at any
            time
          </p>
        </div>

        <div className='flex gap-4 mt-3'>
          <input
            type='email'
            placeholder='Enter your email'
            className='rounded-md p-2 text-[#ffffffa8] outline-none border border-[#77777834] bg-transparent placeholder-[#777778]'
          />
          <button className='bg-[#edd86e] text-[#000] text-[17px] px-5 py-2 rounded-md'>
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
};

export default ResourceCta;
