import Router from 'next/router';
import underscore from 'underscore';
import styles from './styles.css';

const _ = underscore;
export default props => {
    let attributes = _.omit(props, 'children');
    attributes.onClick = event => {
        event.preventDefault();
        Router.push(attributes.href);
    };
    attributes.onTouchEnd = event => {
        event.preventDefault();
        Router.push(attributes.href);
    };
    return <a {...attributes}>{props.children}</a>;
}
