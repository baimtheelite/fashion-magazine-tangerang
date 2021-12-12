export interface ArticleTypes {
    id: number;
    title: string;
    publish_date: string;
    metaDescription: string;
    slug: string;
    cover: string;
}

export interface ArticleDetailTypes {
    id: number;
    title: string;
    publish_date: string;
    slug: string;
    cover: string;
    content: string;
    meta_description: string;
    meta_keywords: string;
    author: {
        id: number;
        name: string;
    }
}

