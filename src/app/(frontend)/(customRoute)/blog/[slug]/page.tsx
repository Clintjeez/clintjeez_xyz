// import { getBlogPostsBySlug } from '@/app/lib/notion';
// import { RenderBlock } from '@/app/components/RenderBlock';
import { payloadData } from '@/app/lib/payload'
import Link from 'next/link'
import { PiCalendarDotsLight } from 'react-icons/pi'
import { FaRegClock, FaTags } from 'react-icons/fa'
import { IoShareOutline } from 'react-icons/io5'
import { GoCopy } from 'react-icons/go'
// import {
//   calculateReadTime,
//   getPostContent,
//   getGoogleDriveImageUrl,
// } from '@/app/lib/utils';
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { format } from 'date-fns'
import { ShareButton } from '../../../components/ShareButton'
import RichTextRenderer from '../../../components/RichTextRenderer'
import { calculatePostReadTime, formatReadTime } from '../../../lib/utils'

export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = params

  try {
    const payload = await payloadData()
    const post = await payload.find({
      collection: 'posts',
      where: {
        slug: {
          equals: slug,
        },
      },
      depth: 2, // Include related data like cover image and author
    })

    if (!post || !post.docs || post.docs.length === 0) {
      notFound()
    }

    const postData = post.docs[0]
    const readTime = calculatePostReadTime(postData)

    // Ensure dates are serialized as strings
    const publishedDate = postData.publishedDate
      ? new Date(postData.publishedDate).toISOString()
      : null
    const updatedAt = postData.updatedAt ? new Date(postData.updatedAt).toISOString() : null

    return (
      <article className="p-4 md:p-8 lg:p-10">
        <div className="w-full md:w-[85%] lg:w-[70%] m-auto">
          <header>
            <div>
              <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-4 md:gap-0">
                <div className="mt-3 md:mt-5">
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 mb-2">
                    <div className="text-10px flex items-center gap-2">
                      <PiCalendarDotsLight />
                      <span className="text-[#777778] text-[12px] sm:text-[13px]">
                        {publishedDate && format(new Date(publishedDate), 'MMM dd, yyyy')}
                      </span>
                    </div>
                    <div className="text-10px flex items-center gap-2">
                      <FaRegClock className="text-[#bfbfbf]" />
                      <span className="text-[#777778] text-[12px] sm:text-[13px]">
                        {formatReadTime(readTime)}
                      </span>
                    </div>
                  </div>

                  <h1 className="text-[20px] sm:text-[25px] md:text-[30px] lg:text-[40px] font-bold mb-2 leading-tight">
                    {postData.title}
                  </h1>

                  {postData.postDescription && (
                    <p className="text-[#777778] text-[14px] sm:text-[16px] mb-4 leading-relaxed">
                      {postData.postDescription}
                    </p>
                  )}

                  {postData.tags && postData.tags.length > 0 && (
                    <ul className="flex text-[10px] sm:text-[11px] gap-2 sm:gap-3 mt-3 flex-wrap">
                      {postData.tags.map((tag: any, index: number) => (
                        <li
                          key={index}
                          className="px-2 py-1 text-[#edd86e8c] border border-[#edd86e8c] rounded-md"
                        >
                          {tag.tag}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                {/* Share button */}
                <div className="self-start md:self-end">
                  <ShareButton postSlug={slug} />
                </div>
              </div>
            </div>

            {/* Cover Image */}
            {postData.coverImage &&
              typeof postData.coverImage === 'object' &&
              'url' in postData.coverImage && (
                <div className="mt-6 md:mt-8 mb-6 md:mb-8">
                  <Image
                    src={postData.coverImage.url as string}
                    alt={postData.title}
                    width={800}
                    height={400}
                    className="w-full h-auto rounded-lg"
                    priority
                  />
                </div>
              )}
          </header>

          {/* Author info */}
          {postData.author && typeof postData.author === 'object' && 'name' in postData.author && (
            <div className="flex items-center gap-3 mb-6 md:mb-8 p-3 md:p-4 bg-[#1b1c21] rounded-lg">
              {(postData.author as any).avatar &&
                typeof (postData.author as any).avatar === 'object' &&
                'url' in (postData.author as any).avatar && (
                  <Image
                    src={(postData.author as any).avatar.url as string}
                    alt={(postData.author as any).name as string}
                    width={40}
                    height={40}
                    className="rounded-full flex-shrink-0"
                  />
                )}
              <div className="min-w-0">
                <p className="text-[#777778] text-xs sm:text-sm">Written by</p>
                <p className="font-medium text-sm sm:text-base truncate">
                  {(postData.author as any).name}
                </p>
              </div>
            </div>
          )}

          {/* Content */}
          <section className="mt-8 md:mt-10 prose prose-invert max-w-none">
            {postData.content ? (
              <div className="rich-text-content">
                <RichTextRenderer content={postData.content} />
              </div>
            ) : (
              <div className="text-[#777778]">
                <p>No content available for this post.</p>
              </div>
            )}
          </section>

          {/* Related posts or footer */}
          <footer className="mt-12 md:mt-16 pt-6 md:pt-8 border-t border-[#333]">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0">
              <div className="text-[#777778] text-xs sm:text-sm">
                Last updated: {updatedAt && format(new Date(updatedAt), 'MMM dd, yyyy')}
              </div>
              <Link
                href="/blog"
                className="text-[#777778] hover:text-white text-xs sm:text-sm underline"
              >
                ← Back to all posts
              </Link>
            </div>
          </footer>
        </div>
      </article>
    )
  } catch (error) {
    console.error('Error fetching post:', error)
    notFound()
  }
}
