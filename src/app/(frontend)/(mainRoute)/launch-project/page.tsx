'use client';
import CustomInput from '@/app/components/CustomInput';
import CustomSelect from '@/app/components/CustomSelect';
import CustomTextarea from '@/app/components/CustomTextarea';
import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LaunchProject = () => {
  const [fullName, setFullName] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [projectDescription, setProjectDescription] = useState('');
  const [projectType, setProjectType] = useState('');
  const [validCheck, setValidCheck] = useState(true);

  const buildType = [
    { value: 'leadsPad', label: 'LeadsPad' },
    { value: 'launchPad', label: 'LaunchPad' },
    { value: 'customRequest', label: 'Custom Request' },
  ];

  useEffect(() => {
    if (fullName && emailAddress && projectDescription) {
      setValidCheck(false);
    } else {
      setValidCheck(true);
    }
  }, [fullName, emailAddress, projectDescription, projectType]);
  // Form submission handler
  const onSubmitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/build_form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          buildType: projectType,
          fullName,
          emailAddress,
          projectDescription,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        toast('Thank you for sending your request', { type: 'success' });
      } else {
        if (response.status === 400 && data.missingFields) {
          toast(
            `Please fill in the following fields: ${data.missingFields.join(
              ', '
            )}`,
            { type: 'error' }
          );
        } else {
          toast(data.msg || 'An error occurred. Please try again.', {
            type: 'error',
          });
        }
      }
    } catch (error) {
      console.error('Submission error:', error);
      toast('Network error. Please check your connection and try again.', {
        type: 'error',
      });
    }
  };

  return (
    <section className='p-8'>
      <div>
        <h1 className='text-[24px] pr-[50px] font-light text-[#777778]'>
          Let&apos;s bring that idea to reality with unique experience{' '}
        </h1>
        <p className='mt-5 text-[#bfbfbf]'>
          Please fill out the form below to get started.
        </p>
      </div>
      <div className='mt-10'>
        <div className='flex gap-3'>
          <div className='bg-[#1b1c21] p-3 border border-[#7777784d] hover:border-[#edd86e53] rounded-md flex flex-col justify-between gap-4'>
            <div>
              <h2 className='text-[14px] text-[#bfbfbf] border-b-[1px] border-[#edd86e] '>
                LeadsPad
              </h2>
              <p className=' text-[11px] mt-2 text-[#ffffff88]'>
                Turn design to pixel-perfect landing page to capture leads.
              </p>
            </div>
            <p className='text-[13px] font-bold text-right mt-4'>
              $1,200 /one-time
            </p>
          </div>
          <div className='bg-[#1b1c21] p-3 border border-[#7777784d] hover:border-[#edd86e53] rounded-md flex flex-col justify-between gap-4'>
            <div>
              <h2 className='text-[14px] text-[#bfbfbf] border-b-[1px] border-[#edd86e]'>
                LaunchPad
              </h2>
              <p className=' text-[12px] mt-2 text-[#ffffff88] '>
                Build from idea to a functional MVP ready to serve your
                customers.
              </p>
            </div>
            <p className='text-[13px] font-bold text-right mt-4'>
              $3,500 /one-time
            </p>
          </div>
          <div className='bg-[#1b1c21] p-3 border border-[#7777784d] hover:border-[#edd86e53] rounded-md flex flex-col justify-between gap-4'>
            <div>
              <h2 className='text-[14px] text-[#bfbfbf] border-b-[1px] border-[#edd86e] '>
                Custom Project
              </h2>
              <p className=' text-[12px] mt-2 text-[#ffffff88]'>
                {' '}
                Build your unique vision with tailored solutions and expert
                guidance.
              </p>
            </div>
            <p className='text-[13px] font-bold text-right mt-4'>
              Custom pricing
            </p>
          </div>
        </div>
        <form className='mt-5 flex flex-col gap-5' onSubmit={onSubmitForm}>
          <CustomSelect
            label='Select project type'
            options={buildType}
            value={projectType}
            onChange={(e) => setProjectType(e.target.value)}
          />
          <CustomInput
            label='Full name'
            placeholder='Enter your last & first name'
            type='text'
            value={fullName}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setFullName(e.target.value)
            }
          />
          <CustomInput
            label='Email address'
            placeholder='Enter email address'
            type='email'
            value={emailAddress}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setEmailAddress(e.target.value)
            }
          />
          <CustomTextarea
            label='About your project'
            placeholder='Enter your project details'
            value={projectDescription}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
              setProjectDescription(e.target.value)
            }
          />
          <div className=' mt-10'>
            <button
              disabled={validCheck}
              className='w-[50%] bg-[#edd86e] hover:bg-[#edd86eb8] disabled:bg-[#edd86e55] disabled:cursor-not-allowed border border-[#edd86e] text-[18px] text-[#000] font-bold p-2 rounded-md'
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      <ToastContainer />
    </section>
  );
};

export default LaunchProject;
