// Node Modules
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AssignmentIcon from '@material-ui/icons/Assignment';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/lightBlue';
import Link from 'next/link';

// Components
import Anchor from '../Anchor';
import styles from './styles.css';

function Navbar(props) {
    const { classes } = props;
    return (<AppBar position="fixed" color="inherit" className={classes.bar}>
        <Toolbar className={classes.tools}>
            <Link href="/"><a><AssignmentIcon className={classes.svg} /></a></Link>
            <Link href="/"><a className={styles.wrapper}>
                <Typography variant="subtitle1" className={classes.name}>Awesome Notes</Typography>
                <Typography variant="subtitle2" className={classes.slogan}>Take notes better</Typography>
            </a></Link>
            <div className={styles.buttons}>
                <Button variant="contained" color="default" href="/login" component={Anchor} className={classes.button}>Sign In</Button>
                <Button variant="contained" color="default" href="/register" component={Anchor} className={classes.button}>Sign Up</Button>
            </div>
        </Toolbar>
    </AppBar>);
}
export default withStyles(theme => ({
    bar: {
        alignItems: 'flex-start',
        backgroundColor: blue[600]
    },
    tools: {
        width: '100%',
    },
    svg: {
        width: '1.675em',
        height: '1.675em',
        fill: '#ffffff'
    },
    name: {
        color: '#ffffff',
        margin: '0'
    },
    slogan: {
        color: '#ffffff',
        fontSize: '0.675em',
        margin: '0'
    },
    button: {
        margin: '0 8px'
    }
}))(Navbar);
