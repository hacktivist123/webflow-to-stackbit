import Link from 'next/link'
import { getComponent } from "..";
import styles from "./style.module.css";

// const Date = getComponent('Date')
const Button = getComponent('Button');


const Post = (props) => {
  const { title, summary, date, category, slug, path, button, ...rest } = props;
  const { fields: buttonData } = button;
  return (
    <div data-sb-field-path={path} className={styles.wrapper} {...rest}>
    <h3 className={styles.title}>
    <Link href={`/posts/${slug}`}>
    <a className={styles.title}>{title}</a>
    </Link>
    </h3>
    <div>
    { date && (
      <p href="" data-sb-field-path=".date" className={styles.date}>
        {date}
      </p>
    )}
    {category && (
      <Link href={`/categories/${category}`}>
      <a href="" data-sb-field-path=".category" className={styles.category}>
         | {category}
      </a>
      </Link>
    )}
    </div>
    <div>
    {summary && (
      <p data-sb-field-path=".summary" className={styles.summary}>
        {summary}
      </p>
    )}
    </div>
    <Button data-sb-object-id={buttonData._id} data-sb-field-path=".buttonText" classes={styles.cta__button} url={buttonData.url} text={buttonData.buttonText} />
    </div>
  )
}

export default Post
