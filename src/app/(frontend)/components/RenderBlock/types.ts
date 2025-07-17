import { ReactNode } from 'react';

export interface RichText {
  annotations: {
    bold: boolean;
    code: boolean;
    italic: boolean;
    strikethrough: boolean;
    underline: boolean;
  };
  text: {
    content: string;
    link: { url: string } | null;
  };
}

export interface BlockProps {
  block: any;
  nested?: boolean;
}

export interface ListBlocksProps {
  blocks: any[];
  type: 'bulleted_list' | 'numbered_list';
}

export interface TextProps {
  richText: RichText[];
}
