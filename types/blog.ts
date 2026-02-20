export interface MicroCMSImage {
  url: string;
  height: number;
  width: number;
}

export interface BlogPost {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  title: string;
  content: string;
  eyecatch?: MicroCMSImage;
  category: string[];
  published_at?: string;
  description?: string;
}

export interface BlogResponse {
  contents: BlogPost[];
  totalCount: number;
  offset: number;
  limit: number;
}
