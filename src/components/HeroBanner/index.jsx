import styles from './style.module.css';
import { getComponent } from '..';

const HeroBanner = (props) => {
    const { path, fields } = props;
    const Container = getComponent('Container');

    const heroImageStyle = {
        backgroundColor: '#f0f0f0'
    };

    return (
        <section
            className={styles.hero}
            style={heroImageStyle}
        >
            <Container isSection={false} classes={styles[fields.textColor]}>
                {fields.title && <h1 data-sb-field-path=".title" className={styles.hero__title}>{fields.title}</h1>}
                {fields.subtitle && <p data-sb-field-path=".subtitle" className={styles.hero__subtitle}>{fields.subtitle}</p>}
            </Container>
        </section>
    );
};

export default HeroBanner;
