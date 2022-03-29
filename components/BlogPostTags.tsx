import React from "react";
import Header2 from "./common/Header2";
import Tag from "./Tag";
import * as helpersT from "../utils/helpers";

type BlogPostTagsProps = {
  tags: helpersT.Tag[];
};

const BlogPostTags : React.FunctionComponent<BlogPostTagsProps> = ({tags}) => {
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
                    tags.map(tag => (<Tag key={tag.name} tag={`${tag.name} (${tag.count})`}/>))
                }
            </div>
        </div>
    );
};

export default BlogPostTags;
