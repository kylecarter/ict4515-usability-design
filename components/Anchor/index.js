import underscore from 'underscore';
import styles from './styles.css';

const _ = underscore;
export default props => {
    let attributes = _.omit(props, 'children');
    return <a {...attributes}>{props.children}</a>;
}
