import Link from 'next/link'
import { getComponent } from "..";
import styles from "./style.module.css";

const Date = getComponent('Date')
const Button = getComponent('Button'
)

const Post = (props) => {
  const { title, summary, date, category, slug, ...rest } = props;
  return (
    <div className={styles.wrapper} {...rest}>
    <h3 className="text-3xl mb-3 leading-snug">
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
