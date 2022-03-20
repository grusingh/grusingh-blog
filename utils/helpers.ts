import {Client} from "@prismicio/client";

const blogPostDocumentType = 'blog-post';

export type BlogPost = {
    uid: string;
    data: {
        title: string;
        publishedOn: string;
        description: string;
        tags: [];
    }
}

export const getAllBlogPosts = async (client: Client) => {
    return client.getAllByType(blogPostDocumentType, {
        orderings: {
            field: 'my.blog-post.publishedOn',
            direction: 'desc'
        }
    });
};

export const getBlogPostByUID = async (client: Client, uid: string) => {
    return client.getByUID(blogPostDocumentType, uid);
};

