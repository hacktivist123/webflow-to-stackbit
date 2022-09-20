import Link from 'next/link'
import styles from './style.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.links}>
        <Link href='#'>
          <a className={styles.link}>Home</a>
        </Link>
        <Link href='#'>
          <a className={styles.link}>All Posts</a>
        </Link>
        <Link href='#'>
          <a className={styles.link}>About</a>
        </Link>
        <Link href='#'>
          <a className={styles.link}>Contact</a>
        </Link>
        <div className={styles.goToTopDiv}>
        <Link href=''>
          <a className={styles.goToTopLink}>↑ Go To Top</a>
        </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
