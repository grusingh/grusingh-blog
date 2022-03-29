import BlogPostSummaryCard from "./BlogPostSummaryCard";
import Header2 from './common/Header2';
import {BlogPost} from "../utils/helpers";
import React from "react";

type RecentlyPublishedProps = {
  posts: BlogPost[];
};

const RecentlyPublished : React.FunctionComponent<RecentlyPublishedProps> = ({posts}) => {
    return (
        <div css={{
            flexGrow: 1,
        }}>
            <Header2>Recently Published</Header2>
            {posts.map((post: any) => (
                <BlogPostSummaryCard post={post} key={post.uid}/>
            ))}
        </div>
    );
};

export default RecentlyPublished;
