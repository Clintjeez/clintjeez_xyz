import React from 'react';
import bgPattern1 from '../../public/Topology-1.svg';
import bgPattern2 from '../../public/Topology-2.svg';
import StepsArrow from '../../public/steps_arrow.svg';
import Image from 'next/image';

const PricingPlans = () => {
  return (
    <section>
      <div className='mb-10'>
        <p className='mb-3'>Pricing</p>
        <h2 className='text-[24px] pr-[50px] font-light text-[#777778]'>
          Build fast, scale reliably{' '}
        </h2>
      </div>

      <div className='h-[600px] flex gap-5'>
        <div className='bg-[#1b1c21] w-[20%] rounded-md pt-5 text-center'>
          <h3>Workflow</h3>
          <ul className='h-[90%] flex flex-col justify-between items-center text-[11px] text-[#777778] p-3 '>
            <li>Submit request</li>
            <li>
              <Image
                src={StepsArrow}
                className='h-[40px] w-[40px] rotate-90'
                alt=''
              />
            </li>
            <li>Schedule call</li>
            <li>
              <Image
                src={StepsArrow}
                className='h-[40px] w-[40px] rotate-90'
                alt=''
              />
            </li>
            <li>Get propopal</li>
            <li>
              <Image
                src={StepsArrow}
                className='h-[40px] w-[40px] rotate-90'
                alt=''
              />
            </li>
            <li>Projects development</li>
            <li>
              <Image
                src={StepsArrow}
                className='h-[40px] w-[40px] rotate-90'
                alt=''
              />
            </li>
            <li>Launch</li>
          </ul>
        </div>
        <div className='w-[80%] h-full flex flex-col gap-5'>
          <div className='bg-[#1b1c21] w-full h-[50%] p-5 flex justify-between border border-[#7777784d] hover:border-[#edd86e53] rounded-md relative overflow-hidden'>
            <div className='flex flex-col justify-between'>
              <div>
                <div className='mb-6'>
                  <h2 className='text-[#bfbfbf] text-[16px] font-bold mb-3 border-b-2 border-[#edd86e] mr-40'>
                    LeadsPad
                  </h2>
                  <p className='text-[#ffffff88] text-[14px] pr-5 leading-4'>
                    Turn design to pixel-perfect landing page to capture leads.
                  </p>
                </div>

                <ul className='text-[#ffffff88] text-[14px] list-disc pl-4 leading-5'>
                  <li>7-days delivery</li>
                  <li>Automation setup</li>
                  <li>Custom copy</li>
                  <li>Unlimited revision</li>
                </ul>
              </div>
              <button className='w-[150px] border border-[#edd86e53] hover:bg-[#edd86e] hover:text-[#000] text-[#bfbfbf] text-[13px] font-bold px-5 py-2 rounded-md transition-all'>
                Get started
              </button>
            </div>
            <div>
              <h2 className='text-[28px] font-bold leading-5'>
                $1,200 <span className='text-[12px]'>/one-time</span>
              </h2>
              <Image
                src={bgPattern1}
                alt='background'
                className='absolute right-[-90px] top-[180px] opacity-25'
                width={300}
              />
            </div>
          </div>

          <div className='bg-[#1b1c21] w-full h-[50%] p-5 flex justify-between border border-[#7777784d] hover:border-[#edd86e53] rounded-md relative overflow-hidden'>
            <div className='flex flex-col justify-between'>
              <div>
                <div className='mb-6'>
                  <h2 className='text-[#bfbfbf] text-[16px] font-bold mb-3 border-b-2 border-[#edd86e] mr-40'>
                    LaunchPad
                  </h2>
                  <p className='text-[#ffffff88] text-[14px] pr-5 leading-4'>
                    Build from idea to a functional MVP ready to serve your
                    customers.
                  </p>
                </div>

                <ul className='text-[#ffffff88] text-[14px] list-disc pl-4 leading-5'>
                  <li>30-days average delivery</li>
                  <li>Automation setup</li>
                  <li>Custom copy</li>
                  <li>Unlimited revision</li>
                </ul>
              </div>
              <button className='w-[150px] bg-[#edd86e] hover:bg-transparent border border-[#edd86e53] hover:text-[#bfbfbf] text-[#000] text-[13px] font-bold px-5 py-2 rounded-md transition-all'>
                Get started
              </button>
            </div>
            <div>
              <h2 className='text-[28px] font-bold leading-5'>
                $3,500 <span className='text-[12px]'>/one-time</span>
              </h2>
              <Image
                src={bgPattern2}
                alt='background'
                className='absolute right-[-90px] top-[150px] opacity-25'
                width={300}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;
