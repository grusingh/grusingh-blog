import Header2 from "./common/Header2";
import Tag from "./Tag";

const BlogPostTags = ({tags}: { tags: any }) => {

    return (
        <div css={{
            flexBasis: '15rem'
        }}>
            <Header2>Categories</Header2>
            <div css={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '1rem'
            }}>
                {
                    tags.map((tag: string) => (<Tag key={tag.name} tag={`${tag.name} (${tag.count})`}/>))
                }
            </div>
        </div>
    );
};

export default BlogPostTags;
