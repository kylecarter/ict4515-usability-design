// Node Modules
import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AssignmentLateIcon from '@material-ui/icons/AssignmentLate';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import Button from '@material-ui/core/Button';
import blue from '@material-ui/core/colors/lightBlue';
import IconButton from '@material-ui/core/IconButton';
import { withStyles } from '@material-ui/core/styles';
import Link from 'next/link';
import underscore from 'underscore';

// Components
import Anchor from '../Anchor';
import styles from './styles.css';

const _ = underscore;
class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = _.extend({
            show: false
        }, props);
        this.expose = this.expose.bind(this);
    }

    static getDerivedStateFromProps(props, state) {
        return {
            show: state.show
        };
    }

    render() {
        const { classes, show } = this.state;
        return (<AppBar position="fixed" color="inherit" className={classes.bar}>
            <Toolbar className={classes.tools}>
                <Link href="/"><a><AssignmentLateIcon className={classes.svg} /></a></Link>
                <Link href="/"><a className={styles.wrapper}>
                    <Typography variant="subtitle1" className={classes.name}>Awesome Notes</Typography>
                    <Typography variant="subtitle2" className={classes.slogan}>Take notes better</Typography>
                </a></Link>
                <IconButton className={classes.menu} onClick={this.expose} onTouchEnd={this.expose}>
                    <MenuIcon className={classes.svg} />
                </IconButton>
                <div className={[styles.buttons, classes.buttons, show ? styles.expose : ''].join(' ')}>
                    <IconButton className={classes.close} onClick={this.expose} onTouchEnd={this.expose}>
                        <CloseIcon className={classes.svg} />
                    </IconButton>
                    <Button variant="contained" color="default" href="/login" component={Anchor} className={[classes.button, classes.firstChild].join(' ')}>Sign In</Button>
                    <Button variant="contained" color="default" href="/" component={Anchor} className={classes.button}>Sign Up</Button>
                </div>
            </Toolbar>
        </AppBar>);
    }

    expose(e) {
        e.preventDefault();
        this.setState({
            show: !this.state.show
        })
    }
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
    buttons: {
        [theme.breakpoints.down('sm')]: {
            backgroundColor: blue[600]
        }
    },
    button: {
        margin: '0 8px',
        [theme.breakpoints.down('sm')]: {
            display: 'block',
            margin: '.5rem 1rem',
            textAlign: 'center'
        }
    },
    menu: {
        [theme.breakpoints.up('md')]: {
            display: 'none'
        }
    },
    close: {
        position: 'absolute',
        right: '0',
        textAlign: 'right',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        }
    },
    firstChild: {
        [theme.breakpoints.down('sm')]: {
            marginTop: '4rem'
        }
    }
}))(Navbar);
