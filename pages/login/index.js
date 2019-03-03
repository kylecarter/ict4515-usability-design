// Node Modules
import React from 'react';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import green from '@material-ui/core/colors/green';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import blueGrey from '@material-ui/core/colors/blueGrey';
import { withStyles } from '@material-ui/core/styles';
import underscore from 'underscore';

// Components
import Page from '../../components/Page';
import styles from './styles.css'
import Head from 'next/head'

const _ = underscore;
class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = _.extend({}, props);
        this.redirect = this.redirect.bind(this);
    }

    render() {
        const { classes } = this.state;
        return (<Page className={classes.page}>
        <Head>
            <title>User Log In | Awesome Notes</title>
        </Head>
        <main id="main-content" className={[styles.main, classes.main].join(' ')}>
            <Paper className={classes.paper} elevation={1}>
                <form className={styles.form} action="/notes" action="post" onSubmit={this.redirect}>
                    <Typography component="h2" variant="h4">Log In</Typography>
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
                    <Button variant="contained" color="primary" type="submit" className={classes.submit}>Submit</Button>
                </form>
            </Paper>
        </main></Page>);
    }

    redirect(e) {
        e.preventDefault();
        window.location.href = '/notes';
    }
}
export default withStyles(theme => ({
    page: {
        backgroundColor: blueGrey[800]
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
}))(Login);
