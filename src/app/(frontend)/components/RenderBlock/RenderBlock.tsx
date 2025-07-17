import { BlockProps } from './types'
import { RichText } from './RichText'
import { ListBlocks } from './ListBlocks'
import { CodeBlock } from './CodeBlock'
import Image from 'next/image'

export function RenderBlock({ block, nested = false }: BlockProps) {
  const { type, id } = block
  const value = block[type]

  return (
    <section className="text-[#777778] font-light ">
      {(() => {
        switch (type) {
          case 'paragraph':
            return (
              <p className="mb-6">
                <RichText richText={value.rich_text} />
              </p>
            )

          case 'heading_1':
            return (
              <h1 className="text-[#fff] font-bold text-3xl mb-5">
                <RichText richText={value.rich_text} />
              </h1>
            )

          case 'heading_2':
            return (
              <h2 className="text-[#fff] text-2xl font-bold mb-4">
                <RichText richText={value.rich_text} />
              </h2>
            )

          case 'heading_3':
            return (
              <h3 className="text-[#fff] text-xl font-bold mb-3">
                <RichText richText={value.rich_text} />
              </h3>
            )

          case 'bulleted_list_item':
          case 'numbered_list_item': {
            const listContent = (
              <>
                <RichText richText={value.rich_text} />
                {value.children && (
                  <div>
                    <ListBlocks
                      blocks={value.children}
                      type={type === 'bulleted_list_item' ? 'bulleted_list' : 'numbered_list'}
                    />
                  </div>
                )}
              </>
            )

            if (nested) {
              return <li className="mb-1">{listContent}</li>
            }

            const ListWrapper = type === 'bulleted_list_item' ? 'ul' : 'ol'
            const wrapperClass =
              type === 'bulleted_list_item' ? 'list-disc ml-6 mb-4' : 'list-decimal ml-6 mb-4'

            return (
              <ListWrapper className={wrapperClass}>
                <li className="mb-1">{listContent}</li>
              </ListWrapper>
            )
          }

          case 'to_do':
            return (
              <div className="flex items-center space-x-2 mb-2">
                <input
                  type="checkbox"
                  id={id}
                  defaultChecked={value.checked}
                  className="rounded border-gray-300"
                />
                <label htmlFor={id} className={value.checked ? 'line-through text-gray-500' : ''}>
                  <RichText richText={value.rich_text} />
                </label>
              </div>
            )

          case 'image': {
            const src = value.type === 'external' ? value.external.url : value.file.url
            const caption = value.caption ? value.caption[0]?.plain_text : ''

            return (
              <figure className="mb-8 flex justify-center w-full  ">
                <div className="w-[60%] relative aspect-video">
                  <Image
                    src={src}
                    alt={caption}
                    className="rounded-lg shadow-md object-cover relative"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    fill
                    priority={true}
                  />
                  {caption && (
                    <figcaption className="text-center text-sm text-gray-600 mt-2">
                      {caption}
                    </figcaption>
                  )}
                </div>
              </figure>
            )
          }

          case 'code':
            return (
              <>
                <CodeBlock language={value.language}>{value.rich_text[0]?.plain_text}</CodeBlock>
                {value.caption && (
                  <figcaption className="text-center text-xs md:text-sm text-gray-400 mt-2">
                    {value.caption}
                  </figcaption>
                )}
              </>
            )

          case 'quote':
            return (
              <blockquote className="border-l-4 border-gray-300 pl-4 italic mb-4">
                <RichText richText={value.rich_text} />
              </blockquote>
            )

          case 'divider':
            return <hr className="my-8 border-gray-200" />

          default:
            return <p className="text-gray-500">Unsupported block type: {type}</p>
        }
      })()}
    </section>
  )
}
