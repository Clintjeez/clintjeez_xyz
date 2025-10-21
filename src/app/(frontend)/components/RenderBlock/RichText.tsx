import { TextProps } from './types';

export function RichText({ richText }: TextProps) {
  return (
    <>
      {richText.map((text, index) => {
        const {
          annotations: { bold, code, italic, strikethrough, underline },
          text: { content, link },
        } = text;

        let className = '';
        if (bold) className += 'font-bold ';
        if (italic) className += 'italic ';
        if (strikethrough) className += 'line-through ';
        if (underline) className += 'underline ';

        if (link) {
          return (
            <a
              key={index}
              href={link.url}
              className={`text-blue-300 italic hover:underline ${className}`}
            >
              {content}
            </a>
          );
        }

        if (code) {
          return (
            <code
              key={index}
              className='bg-gray-100 dark:bg-gray-800 rounded px-1 py-0.5'
            >
              {content}
            </code>
          );
        }

        return (
          <span key={index} className={className}>
            {content}
          </span>
        );
      })}
    </>
  );
}
