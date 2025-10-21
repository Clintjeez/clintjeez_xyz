// 'use client';
// import Image from 'next/image';
// import { ReactNode } from 'react';

// interface BlockProps {
//   block: any;
//   nested?: boolean;
// }

// interface ListBlocksProps {
//   blocks: any[];
//   type: 'bulleted_list' | 'numbered_list';
// }

// const ListBlocks = ({ blocks, type }: ListBlocksProps) => {
//   const Tag = type === 'bulleted_list' ? 'ul' : 'ol';

//   return (
//     <Tag
//       className={
//         type === 'bulleted_list' ? 'list-disc ml-6' : 'list-decimal ml-6'
//       }
//     >
//       {blocks.map((block) => (
//         <RenderBlock key={block.id} block={block} nested={true} />
//       ))}
//     </Tag>
//   );
// };

// export function RenderBlock({ block }: BlockProps) {
//   const { type, id } = block;
//   const value = block[type];
//   console.log('renders', value);

//   const renderText = (richText: any[]) => {
//     return richText.map((text: any, index: number) => {
//       const {
//         annotations: { bold, code, italic, strikethrough, underline },
//         text: { content, link },
//       } = text;

//       let className = '';
//       if (bold) className += 'font-bold ';
//       if (italic) className += 'italic ';
//       if (strikethrough) className += 'line-through ';
//       if (underline) className += 'underline ';

//       const element = (
//         <span key={index} className={className}>
//           {link ? (
//             <a href={link.url} className='text-blue-600 hover:underline'>
//               {content}
//             </a>
//           ) : code ? (
//             <code className='bg-gray-100 dark:bg-gray-800 rounded px-1 py-0.5'>
//               {content}
//             </code>
//           ) : (
//             content
//           )}
//         </span>
//       );

//       return element;
//     });
//   };

//   return (
//     <section className='text-[#777778] font-light '>
//       {(() => {
//         switch (type) {
//           case 'paragraph':
//             return <p className='my-5'>{renderText(value.rich_text)}</p>;
//           case 'heading_1':
//             return (
//               <h1 className='text-[#fff] text-[40px] my-3'>
//                 {renderText(value.rich_text)}
//               </h1>
//             );
//           case 'heading_2':
//             return (
//               <h2 className='text-[#fff] text-[30px] my-3'>
//                 {renderText(value.rich_text)}
//               </h2>
//             );
//           case 'heading_3':
//             return (
//               <h3 className='text-[#fff] text-[20px] my-3'>
//                 {renderText(value.rich_text)}
//               </h3>
//             );
//           case 'bulleted_list_item':
//           case 'numbered_list_item': {
//             const listItem = (
//               <li className='mb-1'>
//                 {renderText(value.rich_text)}
//                 {value.children && (
//                   <ListBlocks
//                     blocks={value.children}
//                     type={
//                       type === 'bulleted_list_item'
//                         ? 'bulleted_list'
//                         : 'numbered_list'
//                     }
//                   />
//                 )}
//               </li>
//             );

//             if (nested) {
//               return listItem;
//             }

//             const ListWrapper = type === 'bulleted_list_item' ? 'ul' : 'ol';
//             return (
//               <ListWrapper
//                 className={
//                   type === 'bulleted_list_item'
//                     ? 'list-disc ml-6 mb-4'
//                     : 'list-decimal ml-6 mb-4'
//                 }
//               >
//                 {listItem}
//               </ListWrapper>
//             );
//           }

//           case 'to_do':
//             return (
//               <label htmlFor={id}>
//                 <input type='checkbox' id={id} defaultChecked={value.checked} />{' '}
//                 {value.rich_text[0].plain_text}
//               </label>
//             );
//           case 'image':
//             const src =
//               value.type === 'external' ? value.external.url : value.file.url;
//             const caption = value.caption ? value.caption[0]?.plain_text : '';
//             return (
//               <figure>
//                 <Image src={src} alt={caption} width={120} height={120} />
//                 {caption && <figcaption>{caption}</figcaption>}
//               </figure>
//             );
//           default:
//             return <p>Unsupported block type: {type}</p>;
//         }
//       })()}
//     </section>
//   );
// }
