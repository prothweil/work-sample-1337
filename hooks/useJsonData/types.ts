interface Block {
  align?: string;
  bgColor?: string;
  color?: string;
  id: string;
  items?: Item[];
  src?: string;
  text?: string;
  type: "button" | "image" | "list" | "text";
}

interface Item {
  description: string;
  src: string;
  title: string;
}

interface Page {
  blocks: Block[];
  id: string;
}

export interface JsonData {
  bgColor: string;
  name: string;
  pages: Page[];
}
