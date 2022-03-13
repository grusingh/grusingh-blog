import Head from 'next/head';
import styles from './index.module.css';
import Link from 'next/link';
import {getAllBlogPosts} from '../utils/helpers';
import React from 'react';
import TagList from '../components/TagList';
import {createClient} from '../prismicio'
import {PrismicRichText} from "@prismicio/react";
import {PrismicDocument, RichTextField} from "@prismicio/types";
import Layout from "../components/layout";

type HomeProps = {
    body: RichTextField,
    posts: Array<PrismicDocument>,
    menu: any
};

const Home = ({posts, body, menu}: HomeProps) => {
    return (
        <Layout menu={menu}>
            <Head>
                <title>Gru Singh&apos;s Blog</title>
                <meta name="description" content="Gru Singh's blog."/>
            </Head>

            <main className={styles.main}>
                <header className={styles.description}>
                    <PrismicRichText field={body}/>
                </header>

                <div className={styles.grid}>
                    {posts.map(post => (
                        <Link key={post.uid} href={`/post/${post.uid}`}>
                            <a className={styles.card}>
                                <h3>{post.data.title}</h3>
                                <div>
                                    <span>Published: {post.data.publishedOn}</span>
                                    <TagList tags={post.tags}/>
                                </div>
                                <p>{post.data.description}</p>
                            </a>
                        </Link>
                    ))}
                </div>
            </main>
        </Layout>
    );
}

export async function getStaticProps({previewData}: {previewData: any}) {
    const client = createClient({previewData})
    const menu = await client.getSingle("menu");
    const page = await client.getSingle('home-page')
    const posts = await getAllBlogPosts(client);

    return {
        props: {
            body: page.data.body,
            posts,
            menu
        }
    }
}

export default Home;
