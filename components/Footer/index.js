// Node Modules
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import blue from '@material-ui/core/colors/lightBlue';
import { withStyles } from '@material-ui/core/styles';
import Link from 'next/link';

import styles from './styles.css'
const Footer = props => {
    const { classes } = props;
    return (<footer className={classes.footer}><Grid container spacing={16}>
        <Grid item md={8}>
            <Typography variant="body2" gutterBottom className={classes.text}>Copyright © 2019 Kyle A. Carter. / <Link href="/legal"><a className={classes.text}>Legal</a></Link> / <Link href="/privacy"><a className={classes.text}>Privacy</a></Link> / <Link href="/terms"><a className={classes.text}>Terms and Conditions</a></Link></Typography>
            <Typography variant="body2" className={classes.text}>2199 S. University Blvd. Devnver, CO 80210 <a href="tel:303.871.2706" className={classes.text}>303.871.2706</a> <a href="mailto:gradinfo@du.edu" className={classes.text}>gradinfo@du.edu</a></Typography>
        </Grid>
    </Grid></footer>);
};
export default withStyles(theme => ({
    footer: {
        color: '#ffffff',
        backgroundColor: blue[600],
        padding: '1rem'
    },
    text: {
        color: 'inherit'
    }
}))(Footer);
