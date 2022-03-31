import { FC } from 'react';
import * as helpersT from 'utils/helpers';
import Header2 from './common/Header2';
import Tag from './Tag';

type BlogPostTagsProps = {
  tags: helpersT.Tag[];
};

const BlogPostTags: FC<BlogPostTagsProps> = ({ tags }) => {
  return (
    <div
      css={{
        flexBasis: '15rem',
      }}
    >
      <Header2>Categories</Header2>
      <div
        css={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '1rem',
        }}
      >
        {tags.map((tag) => (
          <Tag key={tag.name} tag={`${tag.name} (${tag.count})`} />
        ))}
      </div>
    </div>
  );
};

export default BlogPostTags;
