import Link from 'next/link';
import styles from './style.module.css'
import { getComponent } from '..'

const SquareButton = (props) => {
  const Container = getComponent('Container');

  return (
    <Container isSection={false} className={styles.buttonWrapper}>
      <Link href={props.url}>
      <a className={styles.button}>
        {props.text}
      </a>
      </Link>
    </Container>
  )
}

export default SquareButton
