// Node Modules
import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import blueGrey from '@material-ui/core/colors/blueGrey';
import green from '@material-ui/core/colors/green';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import underscore from 'underscore';

// Components
import Page from '../components/Page';
import styles from './styles.css';

const _ = underscore;
class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = _.extend({}, props);
    }

    render() {
        const { classes } = this.state;
        return (<Page className={classes.page}><main id="main-content" className={styles.main}>
            <header className={classes.hero}><Grid container justify="center" alignItems="center" spacing={16}>
                <Grid item md={5}>
                    <Typography component="h1" variant="h2" gutterBottom className={[classes.text, classes.headline].join(' ')}>Don't just take notes; take Awesome Notes.</Typography>
                    <Typography variant="headline" className={classes.text} gutterBottom>Awesome Note is a note app made help keep you productive and focused on the things you need to remember.</Typography>
                </Grid>
                <Grid item md={7}><Paper className={classes.paper} elevation={1}><form className={styles.form} action="/notes" method="post">
                    <Typography component="h2" variant="h4">Sign Up</Typography>
                    <Grid container spacing={16}>
                        <Grid item md={6}>
                            <TextField
                                required
                                fullWidth
                                id="first_name"
                                label="First Name"
                                defaultValue=""
                                margin="normal"
                                placeholder="John"
                                autoComplete="given-name"
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item md={6}>
                            <TextField
                                required
                                fullWidth
                                id="last_name"
                                label="Last Name"
                                defaultValue=""
                                margin="normal"
                                placeholder="John"
                                autoComplete="family-name"
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                type="email"
                                id="email"
                                label="Email"
                                defaultValue=""
                                margin="normal"
                                placeholder="john.doe@email.com"
                                autoComplete="email"
                                variant="outlined"
                                helperText="This will be your username."
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                type="password"
                                id="password"
                                label="Password"
                                defaultValue=""
                                margin="normal"
                                placeholder="Password"
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Button variant="contained" color="primary" type="submit" className={classes.submit}>Submit</Button>
                        </Grid>
                    </Grid>
                </form></Paper></Grid>
            </Grid></header>
        </main></Page>);
    }
}
export default withStyles(theme => ({
    page: {
        backgroundColor: blueGrey[800]
    },
    hero: {
        color: '#ffffff',
        padding: '6rem 1rem',
        [theme.breakpoints.down('sm')]: {
            padding: '4rem 1rem'
        }
    },
    headline: {
        [theme.breakpoints.down('sm')]: {
            fontSize: '2.325em'
        }
    },
    text: {
        color: 'inherit'
    },
    paper: {
        maxWidth: '475px',
        margin: '0 auto',
        padding: '1rem'
    },
    submit: {
        backgroundColor: green[500],
        marginTop: '1rem'
    }
}))(Home);
