import BlogPostSummaryCard from "./BlogPostSummaryCard";
import Header2 from './common/Header2';

const RecentlyPublished = ({posts}: { posts: any }) => {
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
