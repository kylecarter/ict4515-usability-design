// Node Modules
import React from 'react'
import Masonry from 'react-masonry-component';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import ArchiveIcon from '@material-ui/icons/Archive';
import CloseIcon from '@material-ui/icons/Close';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { withStyles } from '@material-ui/core/styles';
import underscore from 'underscore';

// Components
import Navbar from '../../components/Navbar';
import styles from './styles.css'

const _ = underscore;
class Notes extends React.Component {
    constructor(props) {
        super(props);
        this.state = _.extend({}, props);
    }

    render() {
        const { classes } = this.state;
        return (<div className={[styles.content].join(' ')}>
            <Navbar authenticated={true} />
            <main id="main-content" className={styles.main}><Grid container justify="center" alignItems="center" spacing={16}>
                <Grid item md={2}>
                    <section className={styles.section}>
                        <Typography component="h2" variant="h6" gutterBottom>Labels</Typography>
                        <ul className={styles.listUnstyled}>
                            <li><Button className={classes.label}>Inspiration</Button></li>
                            <li><Button variant="outlined" color="secondary" className={[classes.label, classes.active].join(' ')}>
                                Personal
                                <CloseIcon className={classes.close} />
                            </Button></li>
                            <li><Button className={classes.label}>Programming</Button></li>
                            <li><Button className={classes.label}>Recipes</Button></li>
                            <li><Button className={classes.label}>Work</Button></li>
                            <li><Button className={[classes.label, styles.withIcon].join(' ')}>
                                <EditIcon className={classes.svg} />
                                Edit Labels
                            </Button></li>
                        </ul>
                    </section>
                    <section className={styles.section}>
                        <ul className={styles.listUnstyled}>
                            <li><Button className={[classes.label, styles.withIcon].join(' ')}>
                                <ArchiveIcon className={classes.svg} />
                                Archive
                            </Button></li>
                            <li><Button className={[classes.label, styles.withIcon].join(' ')}>
                                <DeleteIcon className={classes.svg} />
                                Trash
                            </Button></li>
                        </ul>
                    </section>
                </Grid>
                <Grid item md={9}>
                    <Button variant="outlined" color="inherit" className={classes.cta}>Take a note...</Button>
                    <Masonry className={styles.mansory} id="isotope-mansory"
                        options={{
                            itemSelector: styles.item,
                            mansory: {
                                columnWidth: styles.item
                            }
                        }}
                    >
                        <Grid item md={4} className={styles.item}><Card className={classes.card}><CardContent>
                            <Typography component="h1" variant="h6" gutterBottom>Note</Typography>
                            <Typography variant="body1">Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion daikon amaranth tatsoi tomatillo melon azuki bean garlic.</Typography>
                        </CardContent></Card></Grid>
                        <Grid item md={4} className={styles.item}><Card className={classes.card}><CardContent>
                            <Typography component="h1" variant="h6" gutterBottom>Note</Typography>
                            <Typography variant="body1" gutterBottom>Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion daikon amaranth tatsoi tomatillo melon azuki bean garlic.</Typography>
                            <Typography variant="body1">Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato. Dandelion cucumber earthnut pea peanut soko zucchini.</Typography>
                        </CardContent></Card></Grid>
                        <Grid item md={4} className={styles.item}><Card className={classes.card}><CardContent>
                            <Typography component="h1" variant="h6" gutterBottom>Note</Typography>
                            <Typography variant="body1">Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion daikon amaranth tatsoi tomatillo melon azuki bean garlic.</Typography>
                        </CardContent></Card></Grid>
                        <Grid item md={4} className={styles.item}><Card className={classes.card}><CardContent>
                            <Typography component="h1" variant="h6" gutterBottom>Note</Typography>
                            <Typography variant="body1">Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion daikon amaranth tatsoi tomatillo melon azuki bean garlic.</Typography>
                        </CardContent></Card></Grid>
                    </Masonry>
                </Grid>
            </Grid></main>
        </div>);
    }
};
export default withStyles(theme =>({
    active: {
        borderRadius: '100px'
    },
    close: {
        width: '1rem',
        height: '1rem',
        display: 'inline-block',
        marginLeft: '2rem'
    },
    svg: {
        marginRight: '.5rem'
    },
    card: {
        margin: '0 1rem 1.325rem'
    },
    cta: {
        textAlign: 'left',
        width: '100%'
    }
}))(Notes);
