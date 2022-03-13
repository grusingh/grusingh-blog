import styles from './TagList.module.css';
import React from 'react';

type TagListProps = {
    tags: Array<string>,
}

const TagList = ({tags}: TagListProps) => {
    if (!tags?.length) {
        return null;
    }

    return <ul className={styles.tags}>
        {
            tags.map(tag => <li key={tag}>{tag}</li>)
        }
    </ul>
}

export default TagList;
