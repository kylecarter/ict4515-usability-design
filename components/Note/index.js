import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

import styles from './styles.css';

const Menu = props => (<div className={styles.menu}><Paper>
    <ul>
        <li><Button data-action="edit" data-id={props.id} style={{ textAlign: 'left' }} onClick={props.action} onTouchEnd={props.action}>Edit</Button></li>
        <li><Button data-action="archive" data-id={props.id} style={{ textAlign: 'left' }} onClick={props.action} onTouchEnd={props.action}>Archive</Button></li>
        <li><Button data-action="delete" data-id={props.id} style={{ textAlign: 'left' }} onClick={props.action} onTouchEnd={props.action}>Delete</Button></li>
        {props.section !== 'active' && <li><Button data-action="restore" data-id={props.id} style={{ textAlign: 'left' }} onClick={props.action} onTouchEnd={props.action}>Restore</Button></li>}
    </ul>
</Paper></div>);

const Labels = props => (<ul>
    {props.list.map((lbl, idx) => <li key={`react.key.note.lbl.${idx}`}>{lbl}</li>)}
</ul>);

class Note extends React.Component {
    constructor(props) {
        super(props);
        this.state = props;
        this.menu = this.menu.bind(this);
        this.action = this.action.bind(this);
    }

    static getDerivedStateFromProps(props, state) {
        return {
            classes: props.classes,
            created: props.created,
            content: props.content,
            id: props.id,
            labels: props.labels,
            title: props.title,
            section: props.section
        };
    }

    render() {
        const { classes, created, content, id, labels, section, show_menu, title } = this.state;
        return (<Grid id={`note-${id}`} item md={4} className={classes.item}><Card className={[classes.card, styles.card].join(' ')}>
            <CardActions className={classes.actions} disableActionSpacing>
                <IconButton onClick={this.menu} onTouchEnd={this.menu}>
                    <MoreVertIcon className={classes.svg} />
                </IconButton>
                {show_menu && <Menu id={id} action={this.action} section={section} />}
            </CardActions>
            <CardContent>
                <h2 className={styles.title}>{title}</h2>
                <div className={classes.content} dangerouslySetInnerHTML={{ __html: content }} />
                <div class={styles.meta}>
                    <time>{created}</time>
                    {labels && <Labels list={labels.split(' ')} />}
                </div>
            </CardContent>
        </Card></Grid>);
    }

    menu(e) {
        this.setState({
            show_menu: !this.state.show_menu
        });
    }

    action(e) {
        this.state[e.currentTarget.getAttribute('data-action')](e);
        this.setState({
            show_menu: false
        });
    }
}
export default withStyles(theme => ({
    svg: {
        marginRight: '.5rem'
    },
    card: {
        font: 'normal normal normal 1rem/1.2 \'Roboto\', helvetica, arial, sans-serif',
        margin: '0 1rem 1.325rem',
        paddingTop: '1.5rem',
        [theme.breakpoints.down('sm')]: {
            marginLeft: 'auto',
            marginRight: 'auto'
        }
    },
    actions: {
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        position: 'absolute',
        right: '0',
        top: '.1rem'
    }
}))(Note);
