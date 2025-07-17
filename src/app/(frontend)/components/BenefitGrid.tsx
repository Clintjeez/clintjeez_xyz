import React from 'react';

const Benefits = () => {
  return (
    <section className='my-20'>
      <h2 className='text-[24px] pr-[50px] font-light text-[#777778]'>
        I partner with SaaS founders and solopreneurs to build experiences that
        resonate and engage. Let&apos;s bring your vision to life.
      </h2>
      <div className='grid grid-cols-3 grid-flow-row mt-8 text-[12px] text-[#ffffffad]  border-[#777778] text-center border rounded-md '>
        <p className='border-b-2 border-[#777778] border-dotted py-5'>
          Feature <br /> ownership
        </p>
        <p className='border-x-2 border-b-2 border-[#777778] border-dotted py-5'>
          Technical <br /> guidiance
        </p>
        <p className='border-b-2 border-[#777778] border-dotted py-5'>
          Async <br /> Communication
        </p>

        <p className='border-b-2 border-[#777778] border-dotted py-5'>
          Rapid <br /> Development
        </p>
        <p className='border-x-2 border-b-2 border-[#777778] border-dotted py-5'>
          Flexible <br /> payments
        </p>
        <p className='border-b-2 border-[#777778] border-dotted py-5'>
          Feature <br /> board
        </p>
        <p className='py-5'>
          User-centric <br /> Approach
        </p>
        <p className='border-x-2  border-[#777778] border-dotted py-5'>
          Quality <br /> Assurance
        </p>
        <p className='py-5'>
          Scalable <br /> Archicture
        </p>
      </div>
      <div className='glassmorphism-bg text-[#edd86e] grid grid-cols-3 grid-flow-row text-center px-3 py-5 rounded-b-md justify-center items-center text-[13px]'>
        <h3 className='py-5 font-bold p-3'>Fullstack Development</h3>
        <h3 className='py-5 font-bold p-3'>No-code Development</h3>
        <h3 className='py-5 font-bold p-3'>Automation Setup</h3>
      </div>
    </section>
  );
};

export default Benefits;
