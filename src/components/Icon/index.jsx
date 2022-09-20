import Image from 'next/image';
import styles from './style.module.css';

const Icon = (props) => {
  return (
    <div data-sb-field-path={props.path}>
      <Image data-sb-field-path=".icon" src={props.fields.file?.url} className={styles.icon} alt={props.fields.alt} />
    </div>
  );
};

export default Icon;
