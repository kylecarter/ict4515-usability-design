// Node Modules
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

// Components
import Page from '../../components/Page';

import styles from './styles.css'
const Terms = props => {
    const { classes } = props;
    return (<Page><main id="main-content" className={styles.main}><Grid container justify="center" alignItems="center" spacing={16}>
        <Grid item md={7}>
            <Typography component="h1" variant="h2" gutterBottom>Terms and Conditions</Typography>
            <Typography variant="body1">This is a note taking app made by a student. Use it don't use it. Just don't complain.</Typography>
        </Grid>
    </Grid></main></Page>);
};
export default Terms;
