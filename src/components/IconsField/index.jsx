import styles from './style.module.css';
import { getComponent } from '..';

const Icon = getComponent('Icon');
const Container = getComponent('Container');

const IconsField = (props) => {
  if (!props.fields) {
    return null;
  }
  const {
    path,
    fields: { icons },
  } = props;
  return (
    <Container isSetion={false} data-sb-field-path={path}>
      <div data-sb-field-path=".icons" className={styles.icons-wrapper}>
        {icons.map((icon) => (
          <Icon key={icon._id} data-sb-object-id={icon._id} {...icon.fields} />
        ))}
      </div>
    </Container>
  );
};

export default IconsField;
