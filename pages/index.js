// Node Modules
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import blue from '@material-ui/core/colors/lightBlue';
import TextField from '@material-ui/core/TextField';
import blueGrey from '@material-ui/core/colors/blueGrey';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import Link from 'next/link';

// Components
import Navbar from '../components/Navbar';

import styles from './styles.css';

function Home(props) {
    const { classes } = props;
    return (<div className={styles.content}>
        <Navbar />
        <main id="main-content" className={styles.main}>
            <header className={classes.hero}><Grid container justify="center" alignItems="center" spacing={16}>
                <Grid item md={5}>
                    <Typography component="h1" variant="h2" gutterBottom>Don't just take notes; take Awesome Notes.</Typography>
                    <Typography variant="body1">Awesome Note is a note app made help keep you productive and focused on the things you need to remember.</Typography>
                </Grid>
                <Grid item md={7}><Paper className={classes.paper} elevation={1}><form className={styles.form} action="/notes" method="post">
                    <Grid container spacing={16}>
                        <Grid item md={6}>
                            <TextField
                                required
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
                                id="password"
                                label="Password"
                                defaultValue=""
                                margin="normal"
                                placeholder="Password"
                                variant="outlined"
                            />
                        </Grid>
                    </Grid>
                </form></Paper></Grid>
            </Grid></header>
        </main>
        <footer className={classes.footer}><Grid container spacing={16}>
            <Grid item md={8}>
                <Typography variant="body2" gutterBottom>Copyright © 2019 Kyle A. Carter. / <Link href="/legal">Legal</Link> / <Link href="/privacy">Privacy</Link> / <Link href="/terms">Terms and Conditions</Link></Typography>
                <Typography variant="body2">2199 S. University Blvd. Devnver, CO 80210 <a href="tel:303.871.2706">303.871.2706</a> <a href="mailto:gradinfo@du.edu">gradinfo@du.edu</a></Typography>
            </Grid>
        </Grid></footer>
    </div>);
}
export default withStyles(theme => ({
    hero: {
        backgroundColor: blueGrey[800],
        color: '#ffffff',
        padding: '2rem 1rem'
    },
    paper: {
        maxWidth: '320px',
        margin: '0 auto',
        padding: '1rem'
    },
    footer: {
        color: '#ffffff',
        backgroundColor: blue[600],
        padding: '1rem'
    }
}))(Home);
