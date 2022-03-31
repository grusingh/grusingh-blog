import { PrismicRichText } from '@prismicio/react';
import * as prismicT from '@prismicio/types';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import { FC } from 'react';
import Header2 from '../../components/common/Header2';
import Layout from '../../components/Layout';
import Tag from '../../components/Tag';
import { createClient } from '../../prismicio';
import {
  getAllBlogPosts,
  getBlogPostByUID,
  getHeaderMenu,
  Menu,
} from '../../utils/helpers';

type PostProps = {
  title: prismicT.KeyTextField;
  description: prismicT.KeyTextField;
  publishedOn: prismicT.DateField;
  tags: string[];
  menu: Menu;
  body: prismicT.RichTextField;
};

const Post: FC<PostProps> = ({
  menu,
  title,
  description,
  publishedOn,
  tags,
  body,
}) => {
  return (
    <Layout menu={menu}>
      <Head>
        <title>Gru Singh - {title}</title>
        <meta name="description" content={description || ''} />
      </Head>

      <main>
        <Header2>{title}</Header2>
        <div>Published: {publishedOn}</div>
        <div
          css={{
            margin: '1rem 0',
            display: 'flex',
            gap: '1rem',
          }}
        >
          {tags.map((tag) => (
            <Tag key={tag} tag={tag} />
          ))}
        </div>

        <div
          css={{
            maxWidth: '48rem',
            'p, ul, li': {
              padding: '.5rem 0',
              lineHeight: '1.5',
            },
            strong: {
              fontWeight: 700,
            },
            li: {
              listStyle: 'circle',
              margin: '0 0 0 1rem',
            },
            pre: {
              fontFamily: 'Consolas,monospace',
              borderRadius: '1rem',
              padding: '1rem',
              backgroundColor: 'rgb(0,0,0,.9)',
              color: '#fff',
              lineHeight: '1.3',
            },
            h2: {
              fontWeight: 700,
              fontSize: '1.1rem',
              margin: '1rem 0 .5rem 0',
            },
          }}
        >
          <PrismicRichText field={body} />
        </div>
      </main>
    </Layout>
  );
};

export const getStaticPaths = async () => {
  const client = createClient({});
  const posts = await getAllBlogPosts(client);
  const paths = posts.map((post) => ({
    params: {
      uid: post.uid,
    },
  }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({
  params,
  previewData,
}) => {
  const client = createClient({ previewData });
  const menu = await getHeaderMenu(client);
  const post = await getBlogPostByUID(client, params?.uid as string);
  const title = post.data.title,
    description = post.data.description,
    publishedOn = post.data.publishedOn,
    body = post.data.body,
    tags = post.tags;

  return {
    props: {
      title,
      description,
      body,
      publishedOn,
      tags,
      menu,
    },
  };
};

export default Post;
