import Link from 'next/link'
import styles from './style.module.css';

const Footer = () => {
  const isactive = {
    color: '#333'
  }
  return (
    <footer className={styles.footer}>
      <div className={styles.links}>
        <Link href='#' id="home">
          <a className={styles.link} style={isactive}>Home</a>
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
