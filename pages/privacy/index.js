// Node Modules
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Link from 'next/link';
import Head from 'next/head'

// Components
import Page from '../../components/Page';

import styles from './styles.css'
const Privacy = props => {
    const { classes } = props;
    return (<Page>
    <Head>
        <title>Privacy Policy | Awesome Notes</title>
    </Head>
    <main id="main-content" className={styles.main}><Grid container justify="center" alignItems="center" spacing={16}>
        <Grid item md={7}>
            <Typography component="h1" variant="h2" gutterBottom>Privacy Policy</Typography>
            <ol className={styles.breadcrumb}>
                <li><Link href="/"><a>Home</a></Link></li>
                <li>Privacy Policy</li>
            </ol>
            <Typography variant="body1" gutterBottom>This app does use the browser's <a href="https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage">localStorage</a> API to do all of it's work. Beyond that nothing else is saved or stored that can identify you or your computer. So it is not storing any cookies or using any tracking tools to take advantage of your borwsing habits.</Typography>
        </Grid>
    </Grid></main></Page>);
};
export default Privacy;
