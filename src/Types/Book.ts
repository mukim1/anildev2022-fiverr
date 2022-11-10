export interface Book {
  id: number;
  title: string;
  subtitle: string;
  author: string;
  time: number;
  reads: string;
  status: string;
  trending: boolean;
  latest: boolean;
  audio: boolean;
  synopsis: string;
  for: string;
  aboutAuthor: string;
  imgSrc?: string;
}
