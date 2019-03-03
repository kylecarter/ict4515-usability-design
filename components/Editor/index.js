// Node Modules
import React from 'react'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import CloseIcon from '@material-ui/icons/Close';
import FormatBold from '@material-ui/icons/FormatBold';
import FormatItalic from '@material-ui/icons/FormatItalic';
import FormatUnderlined from '@material-ui/icons/FormatUnderlined';
import IconButton from '@material-ui/core/IconButton';
import { withStyles } from '@material-ui/core/styles';
import { Editor, EditorState, RichUtils } from 'draft-js';
import underscore from 'underscore';

import styles from './styles.css';

const _ = underscore;
class NoteEditor extends React.Component {
    constructor(props) {
        super(props);
        this.state = _.extend({ editorState: EditorState.createEmpty() }, props);
        this.onChange = (editorState) => this.setState({ editorState });
        this.handleKeyCommand = this.handleKeyCommand.bind(this);
        this._onBoldClick = this._onBoldClick.bind(this);
        this._onItalicClick = this._onItalicClick.bind(this);
        this._onUnderlineClick = this._onUnderlineClick.bind(this);
    }

    static getDerivedStateFromProps(props, state) {
        return state;
    }

    handleKeyCommand(command, editorState) {
        const newState = RichUtils.handleKeyCommand(editorState, command);
        if (newState) {
            this.onChange(newState);
            return 'handled';
        }
        return 'not-handled';
    }

    _onBoldClick() {
        this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'BOLD'));
    }

    _onItalicClick() {
        this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'ITALIC'));
    }

    _onUnderlineClick() {
        this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'UNDERLINE'));
    }

    render() {
        const { classes } = this.state;
        return (<aside className={styles.editor} role="dialog"><Card className={[classes.card, styles.card].join(' ')}>
            <CardActions className={classes.actions} disableActionSpacing>
                <IconButton onClick={this.state.remove} onTouchEnd={this.state.remove}>
                    <CloseIcon className={classes.svg} />
                </IconButton>
            </CardActions>
            <CardContent>
                <TextField required id="title" label="Title" />
                <div className={styles.richtext}>
                    <div className={styles.buttons}>
                        <IconButton onClick={this._onBoldClick} onTouchEnd={this._onBoldClick} title="bold">
                            <FormatBold className={classes.svg} />
                        </IconButton>
                        <IconButton onClick={this._onItalicClick} onTouchEnd={this._onItalicClick} title="italic">
                            <FormatItalic className={classes.svg} />
                        </IconButton>
                        <IconButton onClick={this._onUnderlineClick} onTouchEnd={this._onUnderlineClick} title="underline">
                            <FormatUnderlined className={classes.svg} />
                        </IconButton>
                    </div>
                    <div className={styles.textarea}>
                        <Editor editorState={this.state.editorState} onChange={this.onChange} handleKeyCommand={this.handleKeyCommand} />
                    </div>
                </div>
            </CardContent>
        </Card></aside>);
    }
}
export default withStyles(theme => ({
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
    actions: {
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        position: 'absolute',
        right: '10px',
        top: '.1rem'
    }
}))(NoteEditor);
