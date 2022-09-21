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
        <Link href=''>
          <a className={`${styles.link} ${styles.floatRight}`} id="">↑ Go To Top</a>
        </Link>
      </div>
    </footer>
  )
}

export default Footer
