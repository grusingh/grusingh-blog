import React from 'react';
import Link from "next/link";
import Header3 from './common/Header3';
import {BlogPost} from "../utils/helpers";

const BlogPostSummaryCard = ({post}: { post: BlogPost }) => {
    return (
        <div css={{
            padding: '1rem 0',
        }}>
            <Link href={`/post/${post.uid}`} passHref={true}>
                <div css={{
                    cursor: 'pointer',
                    maxWidth: '48rem',
                    lineHeight: 1.5,
                }}>
                    <Header3>{post.data.title}</Header3>
                    <p css={{
                        marginBottom: '1rem',
                        fontSize: '.9rem',
                    }}>{post.data.description}</p>
                    <a>Read more</a>
                </div>
            </Link>
        </div>
    );
};

export default BlogPostSummaryCard;
