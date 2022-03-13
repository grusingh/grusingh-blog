import Head from 'next/head';
import styles from './Post.module.css';
import {getAllBlogPosts, getBlogPostByUID} from '../../utils/helpers';
import TagList from '../../components/TagList';
import {createClient} from "../../prismicio";
import {PrismicRichText} from "@prismicio/react";
import {RichTextField} from "@prismicio/types";
import Layout from "../../components/layout";

type PostProps = {
    title: string,
    description: string,
    publishedOn: string,
    tags: Array<string>,
    menu: any,
    body: RichTextField
};

const Post = ({menu, title, description, publishedOn, tags, body}: PostProps) => {
    return (
        <Layout menu={menu}>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description}/>
            </Head>

            <main className={styles.main}>
                <h2>{title}</h2>
                <div>Published: {publishedOn}</div>
                <TagList tags={tags}/>

                <PrismicRichText field={body}/>
            </main>
        </Layout>
    );
};

export async function getStaticPaths() {
    const client = createClient({})
    const posts = await getAllBlogPosts(client);
    const paths = posts.map((post) => ({
        params: {
            uid: post.uid
        },
    }));
    return {paths, fallback: false};
}

export async function getStaticProps({params, previewData}: { params: { uid: string }, previewData: any }) {
    const client = createClient({previewData})
    const menu = await client.getSingle("menu");
    const post = await getBlogPostByUID(client, params.uid);
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
            menu
        }
    };
}

export default Post;
