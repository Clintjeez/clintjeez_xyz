import { RenderBlock } from '@/app/components/RenderBlock';
import { getProjectsBySlug } from '@/app/lib/notion';
import Link from 'next/link';
import { FaRegClock, FaTags } from 'react-icons/fa';
import { GoCopy } from 'react-icons/go';
import { PiCalendarDotsLight } from 'react-icons/pi';

export default async function Page({ params }: { params: { slug: string } }) {
  const result = await getProjectsBySlug(params.slug);

  if (!result) {
    return <div>Post not found</div>;
  }
  const { project, blocks } = result;
  return (
    <main className='p-8 md:p-10'>
      <div className='w-full md:w-[70%] m-auto'>
        <div>
          <Link href='/lab' className='mb-10'>
            <svg
              width='35'
              height='22'
              viewBox='0 0 72 42'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fill='none'
                stroke='#b3b3b3'
                stroke-width='2'
                stroke-miterlimit='0'
                d='M72.807 11.199H2.093M11.933 1.399l-9.8 9.8 9.8 9.8'
              ></path>
            </svg>
          </Link>
          <div className='flex justify-between items-end'>
            <div className='mt-5'>
              <div className='flex gap-6 mb-2'>
                <div className='text-10px flex items-center gap-2'>
                  <PiCalendarDotsLight />
                  <span className='text-[#777778] text-[13px]'>
                    Last updated - {project.last_edited}
                  </span>
                </div>
              </div>
              <h1 className='text-[25px] md:text-[40px] font-bold mb-2'>
                {`Project Title: ${project.title}`}
              </h1>

              <ul className='flex text-[11px] gap-3 mt-4'>
                {project.tags?.map((tag) => (
                  <li
                    key={tag}
                    className='px-2 py-1 text-[#edd86e8c] border border-[#edd86e8c] rounded-md'
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
            {/* share */}
            <button className='text-[20px] text-[#77777869] hover:text-[#777778] hover:border-[#777778] border-[1px] border-[#77777869] rounded-md p-2'>
              <GoCopy />
            </button>
          </div>
        </div>
        <section className='mt-10'>
          {blocks.map((block) => (
            <RenderBlock key={block.id} block={block} />
          ))}
        </section>
      </div>
    </main>
  );
}
