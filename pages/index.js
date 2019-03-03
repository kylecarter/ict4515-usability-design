import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles.css'

function Home() {
    return (<main id="main-content"><Grid container spacing={16}>
        <Grid item xs={12}>
            <Typography component="h1" variant="h3" gutterBottom>ICT 4515</Typography>
            <Typography variant="body1" gutterBottom>body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.</Typography>
        </Grid>
    </Grid></main>);
}
export default withStyles(styles)(Home);
