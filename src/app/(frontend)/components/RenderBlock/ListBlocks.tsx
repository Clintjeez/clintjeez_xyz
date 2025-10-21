import { ListBlocksProps } from './types';
import { RenderBlock } from './RenderBlock';

export function ListBlocks({ blocks, type }: ListBlocksProps) {
  const Tag = type === 'bulleted_list' ? 'ul' : 'ol';
  const className =
    type === 'bulleted_list' ? 'list-disc ml-6' : 'list-decimal ml-6';

  return (
    <Tag className={className}>
      {blocks.map((block) => (
        <RenderBlock key={block.id} block={block} nested={true} />
      ))}
    </Tag>
  );
}
