// Node Modules
import React from 'react'
import Masonry from 'react-masonry-component';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ArchiveIcon from '@material-ui/icons/Archive';
import CloseIcon from '@material-ui/icons/Close';
import DeleteIcon from '@material-ui/icons/Delete';
import FolderIcon from '@material-ui/icons/Folder';
import { withStyles } from '@material-ui/core/styles';
import underscore from 'underscore';
import Head from 'next/head';
import jQuery from 'jquery';

// Components
import Navbar from '../../components/Navbar';
import Editor from '../../components/Editor';
import Note from '../../components/Note';
import styles from './styles.css';

const $ = jQuery;
const _ = underscore;

class Notes extends React.Component {
    constructor(props) {
        super(props);
        this.state = _.extend({
            show_editor: false,
            show_menu: false,
            section: 'active',
            filter: 'all',
            labels: [],
            notes: [],
            active: [],
            archived: [],
            trash: []
        }, props);
        this.editor = this.editor.bind(this);
        this.remove = this.remove.bind(this);
        this.filter = this.filter.bind(this);
        this.save = this.save.bind(this);
        this.edit = this.edit.bind(this);
        this.archive = this.archive.bind(this);
        this.delete = this.delete.bind(this);
        this.view = this.view.bind(this);
        this.restore = this.restore.bind(this);
    }

    static getDerivedStateFromProps(props, state) {
        return {
            notes: state.notes,
        };
    }

    componentDidMount() {
        $.get("/static/notes.json", data => {
            this.setState({
                labels: data.labels,
                notes: data.notes,
                active: _.map(data.notes, note => note.id)
            });
        });
    }

    render() {
        const { classes, filter, labels, notes, show_editor, section, sticky } = this.state;
        const output = (()=> {
            return _.map(this.state[section], id => {
                const obj = _.find(notes, note => note.id === id);
                if (filter === 'all') {
                    return obj;
                } else {
                    return obj.labels.indexOf(filter) > -1 ? obj : '';
                }
            });
        })();

        return (<div className={[styles.content].join(' ')}>
            <Head>
                <title>My Notes | Awesome Notes</title>
            </Head>
            <Navbar authenticated={true} />
            <main id="main-content" className={styles.main}><Grid container justify="flex-start" alignItems="flex-start" spacing={16}>
                <Grid item md={2}>
                    <section className={styles.section}>
                        <Typography component="h2" variant="h6" gutterBottom>Labels</Typography>
                        <ul className={styles.listUnstyled}>
                            {labels.sort().map((lbl, idx)=> (<li key={`react.key.lbl.${lbl}.${idx}` }>
                                <Button data-filter={lbl} variant={filter === lbl ? 'outlined' : ''} color={filter === lbl ? 'secondary' : ''} onClick={this.filter} onTouchEnd={this.filter} className={[classes.label, filter === lbl ? classes.active : ''].join(' ').trim()}>
                                    {lbl}
                                    { filter === lbl && <CloseIcon className={classes.close} />}
                                </Button>
                            </li>))}
                        </ul>
                    </section>
                    <section className={styles.section}>
                        <ul className={styles.listUnstyled}>
                            <li><Button onClick={this.view} onTouchEnd={this.view} data-section="active" className={[classes.label, styles.withIcon].join(' ')}>
                                <FolderIcon className={classes.svg} />
                                Active
                            </Button></li>
                            <li><Button onClick={this.view} onTouchEnd={this.view} data-section="archived" className={[classes.label, styles.withIcon].join(' ')}>
                                <ArchiveIcon className={classes.svg} />
                                Archive
                            </Button></li>
                            <li><Button onClick={this.view} onTouchEnd={this.view} data-section="trash" className={[classes.label, styles.withIcon].join(' ')}>
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
                        {output.length > 0 && _.sortBy(output, 'created').reverse().map((note, idx) => note && <Note key={`react.key.note.${note.id}.${idx}`} archive={this.archive} delete={this.delete} edit={this.edit} restore={this.restore} section={section} {...note} />)}
                        {output.length < 1 && <Typography variant="body1" gutterBottom>Nothing to see here.</Typography>}
                    </Masonry>
                </Grid>
            </Grid>
            {show_editor && <Editor remove={this.remove} save={this.save} note={sticky} />}
            </main>
        </div>);
    }

    editor(e) {
        this.setState({
            show_editor: true,
            sticky: null
        });
    }

    remove(e) {
        this.setState({
            show_editor: false
        })
    }

    view(e) {
        this.setState({
            section: e.currentTarget.getAttribute('data-section')
        });
    }

    save(e) {
        const $editor = $(e.currentTarget).parents('[data-id]');
        let notes = this.state.notes;
        let active = this.state.active;
        let labels = _.uniq(document.getElementById('note-labels').value.split(' ').concat(this.state.labels));

        if ($editor.attr('data-id') !== undefined) {
            const note = _.findIndex(this.state.notes, obj => obj.id === parseInt($editor.attr('data-id')));
            notes[note].title = document.getElementById('note-title').value;
            notes[note].labels = document.getElementById('note-labels').value;
            notes[note].content = document.querySelector('.public-DraftEditor-content [data-contents]').innerHTML;
        } else {
            const today = new Date();
            let dd = today.getDate();
            let mm = today.getMonth();
            let yyyy = today.getFullYear();
            let notes = this.state.notes
            let counter = this.state.notes.length + 1;
            notes.push({
                id: counter,
                title: document.getElementById('note-title').value,
                content: document.querySelector('.public-DraftEditor-content [data-contents]').innerHTML,
                labels: document.getElementById('note-labels').value,
                created: `${yyyy}-${mm < 10 ? '0' + mm : mm}-${dd < 10 ? '0' + dd : dd}`
            });
            active.push(counter);
        }
        this.setState({
            notes: notes,
            labels: labels,
            active:active,
            show_editor: false,
        });
    }

    filter(e) {
        const filter = e.currentTarget.getAttribute('data-filter');
        this.setState({
            filter: this.state.filter === filter ? 'all' : filter
        });
    }

    archive(e) {
        let archived = this.state.archived;
        archived.push(parseInt(e.currentTarget.getAttribute('data-id')));
        this.setState({
            archived: _.uniq(archived),
            active: _.without(this.state.active, parseInt(e.currentTarget.getAttribute('data-id')))
        });
    }

    delete(e) {
        let trash = this.state.trash;
        trash.push(parseInt(e.currentTarget.getAttribute('data-id')));
        this.setState({
            trash: _.uniq(trash),
            active: _.without(this.state.active, parseInt(e.currentTarget.getAttribute('data-id')))
        });
    }

    edit(e) {
        const note = _.find(this.state.notes, obj => obj.id === parseInt(e.currentTarget.getAttribute('data-id')));
        this.setState({
            show_editor: true,
            sticky: note
        });
    }

    restore(e) {
        let active = this.state.active;
        active.push(parseInt(e.currentTarget.getAttribute('data-id')));
        this.setState({
            active: _.uniq(active),
            archived: _.without(this.state.archived, parseInt(e.currentTarget.getAttribute('data-id'))),
            trash: _.without(this.state.trash, parseInt(e.currentTarget.getAttribute('data-id')))
        });
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
    }
}))(Notes);
