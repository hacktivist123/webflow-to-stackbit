import styles from './style.module.css';

const Button = (props) => {
    const { url, text, classes, ...rest } = props;

    return (
        <a
            className={[styles.button, classes, ''].join(' ')}
            href={url}
            {...rest}
        >
            {text}
        </a>
    );
};

export default Button;
