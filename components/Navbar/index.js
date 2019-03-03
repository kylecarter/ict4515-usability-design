import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import styles from './styles.css';

function Navbar(props) {
    return (<AppBar position="static">
        <Toolbar>
            <AttachFile />
            <Typography variant="subtitle1">AwesomeNotes</Typography>
            <Typography variant="subtitle2">Take notes better</Typography>
        </Toolbar>
    </AppBar>);
}
export default withStyles(styles)(Navbar);
