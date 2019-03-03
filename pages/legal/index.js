// Node Modules
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Link from 'next/link';

// Components
import Page from '../../components/Page';

import styles from './styles.css'
const Legal = props => {
    return (<Page><main id="main-content" className={styles.main}><Grid container justify="center" alignItems="center" spacing={16}>
        <Grid item md={7}>
            <Typography component="h1" variant="h2" gutterBottom>Legal Notice</Typography>
            <ol className={styles.breadcrumb}>
                <li><Link href="/"><a>Home</a></Link></li>
                <li>Legal</li>
            </ol>
            <Typography variant="body1" gutterBottom>So use this project do not use this project. Understand it is a class project and not a full featured production application. This said maybe you find some of this useful. By all means use what you see here.</Typography>
            <Typography variant="body1">This project relies on a lot of third party libraries such as React, NextJS, Material UI, Postcss, etc. That said I am not going to come chase you down if you decide to use any of this code. Why you would I don't know.</Typography>
        </Grid>
    </Grid></main></Page>);
};
export default Legal;
