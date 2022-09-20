import styles from './style.module.css';

const Button = (props) => {
    const { url, text} = props;

    return (
        <a
            className={styles.button}
            href={url}
        >
            {text}
        </a>
    );
};

export default Button;
