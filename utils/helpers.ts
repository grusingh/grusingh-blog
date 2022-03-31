import { Client } from '@prismicio/client';
import * as prismicT from '@prismicio/types';

const blogPostDocumentType = 'blog-post';

export type BlogPost = {
  uid: string;
  tags: string[];
  data: {
    title: prismicT.KeyTextField;
    publishedOn: prismicT.DateField;
    description: prismicT.KeyTextField;
    body: prismicT.RichTextField;
  };
};

export type Menu = {
  data: {
    title: prismicT.RichTextField;
    menuLinks: Array<{
      link: prismicT.LinkField;
      label: prismicT.RichTextField;
    }>;
  };
};

export type Tag = {
  name: string;
  count: number;
};

export const getAllBlogPosts = async (client: Client) => {
  const posts: unknown = await client.getAllByType(blogPostDocumentType, {
    orderings: {
      field: 'my.blog-post.publishedOn',
      direction: 'desc',
    },
  });

  return posts as BlogPost[];
};

export const getBlogPostByUID = async (client: Client, uid: string) => {
  const post: unknown = await client.getByUID(blogPostDocumentType, uid);

  return post as BlogPost;
};

export const getHeaderMenu = async (client: Client) => {
  const menu: unknown = await client.getSingle('menu');

  return menu as Menu;
};
