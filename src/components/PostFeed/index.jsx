import styles from './style.module.css';
import { getComponent } from '..';

const Container = getComponent('Container');
const Post = getComponent('Post');
const SquareButton = getComponent('SquareButton');

const PostFeed = (props) => {
  if (!props.fields) {
    return null;
  }

  const {
    path,
    fields: { posts },
  } = props;

  return (
    <Container data-sb-field-path={path}>
      <div data-sb-field-path=".posts" className={styles.posts}>
        {posts.map((post) => (
          <Post key={post._id} data-sb-object-id={post._id} {...post.fields} />
        ))}
        <SquareButton text="More posts →" url="/posts"/>
      </div>
    </Container>
  );
};

export default PostFeed;
