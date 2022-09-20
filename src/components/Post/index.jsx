import Link from 'next/link'
import { getComponent } from "..";
import styles from "./style.module.css";

// const Date = getComponent('Date')
const Button = getComponent('Button');


const Post = (props) => {
  const { title, summary, date, category, slug, fields, path, button, ...rest } = props;
  return (
    <div data-sb-field-path ={path} className={styles.wrapper} {...rest}>
    <h3 className={styles.title}>
    <Link href={`/posts/${slug}`}>
    <a className={styles.title}>{title}</a>
    </Link>
    </h3>
    <div>
    {category && (
      <p data-sb-field-path=".category" className={styles.category}>
        {category}
      </p>
    )}
    </div>
    <div>
    {summary && (
      <p data-sb-field-path=".summary" className={styles.summary}>
        {summary}
      </p>
    )}
    </div>
    </div>
  )
}

export default Post
