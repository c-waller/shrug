export type BaseShrug = {
  tags: string[];
  nick: string;
  createdAt: string;
  type: "text" | "image";
  comments: number;
  id: string;
};

export type TextShrug = BaseShrug & {
  type: "text";
  title: string;
  content: string;
};

export type ImageShrug = BaseShrug & {
  type: "image";
  title?: string;
  image: string;
};

export type Shrug = TextShrug | ImageShrug;