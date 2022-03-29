import Head from 'next/head';
import {BlogPost, getAllBlogPosts, getHeaderMenu, Menu, Tag} from '../utils/helpers';
import React, {FC} from 'react';
import {createClient} from '../prismicio'
import {RichTextField} from "@prismicio/types";
import Layout from "../components/Layout";
import RecentlyPublished from "../components/RecentlyPublished";
import BlogPostTags from "../components/BlogPostTags";
import {mq} from "../theme";

type HomeProps = {
    body: RichTextField;
    posts: BlogPost[];
    tags: Tag[];
    menu: Menu;
};

const Home : FC<HomeProps> = ({posts, tags, menu}) => {
    return (
        <Layout menu={menu}>
            <Head>
                <title>Gru Singh</title>
                <meta name="description" content="Gru Singh is a Software Engineer and a Technical Leader who specializes in frontend technologies while working across full-stack."/>
            </Head>

            <main css={{
                display: 'flex',
                flexDirection: 'column',
                [mq.sm]: {
                    flexDirection: 'row',
                }
            }}>
                <RecentlyPublished posts={posts}/>
                <BlogPostTags tags={tags}/>
            </main>
        </Layout>
    );
}

const generateTagsFromPosts = (posts: BlogPost[]): Tag[] => {
    const tags = posts.flatMap(p => p.tags)
        .reduce((acc: { [x: string]: number; }, tag: string | number) => {
            if (acc[tag]) {
                acc[tag] += 1;
            } else {
                acc[tag] = 1;
            }
            return acc;
        }, {});

    return Object.entries(tags)
        .map(([k, v]) => ({name: k, count: v as number}))
        .sort((a, b) => b.count - a.count);
}

export async function getStaticProps({previewData}: { previewData: any }) {
    const client = createClient({previewData})
    const menu = await getHeaderMenu(client);
    const page = await client.getSingle('home-page')
    const posts = await getAllBlogPosts(client);
    const tags = generateTagsFromPosts(posts);

    return {
        props: {
            body: page.data.body,
            posts,
            tags,
            menu
        }
    }
}

export default Home;
