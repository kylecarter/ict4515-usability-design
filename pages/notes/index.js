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
import MoreVertIcon from '@material-ui/icons/MoreVert';
import IconButton from '@material-ui/core/IconButton';
import { withStyles } from '@material-ui/core/styles';
import underscore from 'underscore';
import Head from 'next/head'

// Components
import Navbar from '../../components/Navbar';
import Editor from '../../components/Editor';
import styles from './styles.css';


const _ = underscore;
class Notes extends React.Component {
    constructor(props) {
        super(props);
        this.state = _.extend({
            show_editor: false
        }, props);
        this.expose = this.expose.bind(this);
        this.editor = this.editor.bind(this);
        this.remove = this.remove.bind(this);
    }

    static getDerivedStateFromProps(props, state) {
        return {
            show: state.show_editor
        };
    }

    render() {
        const { classes, show_editor } = this.state;
        return (<div className={[styles.content].join(' ')}>
            <Head>
                <title>My Notes | Awesome Notes</title>
            </Head>
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
                    <Button variant="outlined" color="inherit" className={[classes.cta, styles.cta].join(' ')} onClick={this.editor} onTouchEnd={this.editor}>Take a note...</Button>
                    <Masonry className={styles.mansory} id="isotope-mansory"
                        options={{
                            itemSelector: styles.item,
                            mansory: {
                                columnWidth: styles.item
                            }
                        }}
                    >
                        <Grid item md={4} className={styles.item}><Card className={[classes.card, styles.card].join(' ')}>
                            <CardActions className={classes.actions} disableActionSpacing>
                                <IconButton onClick={this.expose} onTouchEnd={this.expose}>
                                    <MoreVertIcon className={classes.svg} />
                                </IconButton>
                            </CardActions>
                            <CardContent>
                                <h2>Note</h2>
                                <p>Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion daikon amaranth tatsoi tomatillo melon azuki bean garlic.</p>
                            </CardContent>
                        </Card></Grid>
                        <Grid item md={4} className={styles.item}><Card className={[classes.card, styles.card].join(' ')}>
                            <CardActions className={classes.actions} disableActionSpacing>
                                <IconButton onClick={this.expose} onTouchEnd={this.expose}>
                                    <MoreVertIcon className={classes.svg} />
                                </IconButton>
                            </CardActions>
                            <CardContent>
                                <h2>Note</h2>
                                <p>Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion daikon amaranth tatsoi tomatillo melon azuki bean garlic.</p>
                                <p>Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato. Dandelion cucumber earthnut pea peanut soko zucchini.</p>
                            </CardContent>
                        </Card></Grid>
                        <Grid item md={4} className={styles.item}><Card className={[classes.card, styles.card].join(' ')}>
                            <CardActions className={classes.actions} disableActionSpacing>
                                <IconButton onClick={this.expose} onTouchEnd={this.expose}>
                                    <MoreVertIcon className={classes.svg} />
                                </IconButton>
                            </CardActions>
                            <CardContent>
                                <h2>Note</h2>
                                <p>Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion daikon amaranth tatsoi tomatillo melon azuki bean garlic.</p>
                            </CardContent>
                        </Card></Grid>
                        <Grid item md={4} className={styles.item}><Card className={[classes.card, styles.card].join(' ')}>
                            <CardActions disableActionSpacing>
                                <IconButton className={classes.actions} onClick={this.expose} onTouchEnd={this.expose}>
                                    <MoreVertIcon className={classes.svg} />
                                </IconButton>
                            </CardActions>
                            <CardContent>
                                <h2>Note</h2>
                                <p>Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion daikon amaranth tatsoi tomatillo melon azuki bean garlic.</p>
                            </CardContent>
                        </Card></Grid>
                    </Masonry>
                </Grid>
            </Grid>
            {show_editor && <Editor remove={this.remove} />}
            </main>
        </div>);
    }

    expose(e) {
        return true;
    }

    editor(e) {
        this.setState({
            show_editor: true
        });
    }

    remove(e) {
        this.setState({
            show_editor: false
        })
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
        margin: '0 1rem 1.325rem',
        paddingTop: '1.5rem',
        [theme.breakpoints.down('sm')]: {
            marginLeft: 'auto',
            marginRight: 'auto'
        }
    },
    cta: {
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        margin: '0 1rem 1.345rem',
        textAlign: 'left',
        width: '100%',
        [theme.breakpoints.down('sm')]: {
            marginLeft: 'auto',
            marginRight: 'auto'
        }
    },
    actions: {
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        position: 'absolute',
        right: '0',
        top: '.1rem'
    }
}))(Notes);
