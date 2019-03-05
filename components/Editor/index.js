// Node Modules
import React from 'react'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import CloseIcon from '@material-ui/icons/Close';
import Icon from '@material-ui/core/Icon';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { withStyles } from '@material-ui/core/styles';
import { ContentState, convertFromHTML, Editor, EditorState, RichUtils, getDefaultKeyBinding } from 'draft-js';
import underscore from 'underscore';

import styles from './styles.css';

const _ = underscore;
class StyleButton extends React.Component {
    constructor(props) {
        super(props);
        this.onToggle = (e) => {
            e.preventDefault();
            this.props.onToggle(this.props.style);
        };
    }

    render() {
        const is_active = this.props.active;
        return (<IconButton className={is_active ? styles.active : ''} onClick={this.onToggle} onTouchEnd={this.onToggle} title={this.props.label}>
            <Icon>{this.props.icon}</Icon>
        </IconButton>);
    }
}

const BLOCK_TYPES = [
    { label: 'heading', style: 'header-four', icon: 'title' },
    { label: 'ordered list', style: 'unordered-list-item', icon: 'format_list_numbered' },
    { label: 'unordered list', style: 'ordered-list-item', icon: 'format_list_bulleted' },
];
const BlockStyleControls = (props) => {
    const { editorState } = props;
    const selection = editorState.getSelection();
    const blockType = editorState
        .getCurrentContent()
        .getBlockForKey(selection.getStartKey())
        .getType();
    return (
        <div className="RichEditor-controls">
            {BLOCK_TYPES.map((type) =>
                <StyleButton
                    key={type.label}
                    active={type.style === blockType}
                    label={type.label}
                    onToggle={props.onToggle}
                    style={type.style}
                    icon={type.icon}
                />
            )}
        </div>
    );
};

var INLINE_STYLES = [
    { label: 'bold', style: 'BOLD', icon: 'format_bold' },
    { label: 'italic', style: 'ITALIC', icon: 'format_italic' },
    { label: 'underline', style: 'UNDERLINE', icon: 'format_underlined' }
];
const InlineStyleControls = (props) => {
    const currentStyle = props.editorState.getCurrentInlineStyle();

    return (
        <div className="RichEditor-controls">
            {INLINE_STYLES.map((type) =>
                <StyleButton
                    key={type.label}
                    active={currentStyle.has(type.style)}
                    label={type.label}
                    onToggle={props.onToggle}
                    style={type.style}
                    icon={type.icon}
                />
            )}
        </div>
    );
};

class NoteEditor extends React.Component {
    constructor(props) {
        super(props);
        this.state = _.extend({}, props);
        this.onChange = (editorState) => this.setState({ editorState });
        this.handleKeyCommand = this.handleKeyCommand.bind(this);
        this.mapKeyToEditorCommand = this._mapKeyToEditorCommand.bind(this);
        this.toggleBlockType = this._toggleBlockType.bind(this);
        this.toggleInlineStyle = this._toggleInlineStyle.bind(this);

        let editorState = null;
        if (this.props.note) {
            const blocksFromHTML = convertFromHTML(this.props.note.content);
            const contentState = ContentState.createFromBlockArray(blocksFromHTML);
            editorState = EditorState.createWithContent(contentState);
        } else {
            editorState = EditorState.createEmpty();
        }
        this.state.editorState = editorState;
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

    _mapKeyToEditorCommand(e) {
        if (e.keyCode === 9) {
            const newEditorState = RichUtils.onTab(
                e,
                this.state.editorState,
                4,
            );
            if (newEditorState !== this.state.editorState) {
                this.onChange(newEditorState);
            }
            return;
        }
        return getDefaultKeyBinding(e);
    }

    _toggleBlockType(blockType) {
        this.onChange(
            RichUtils.toggleBlockType(
                this.state.editorState,
                blockType
            )
        );
    }

    _toggleInlineStyle(inlineStyle) {
        this.onChange(
            RichUtils.toggleInlineStyle(
                this.state.editorState,
                inlineStyle
            )
        );
    }

    render() {
        const { classes, editorState, note } = this.state;
        return (<aside className={styles.editor} role="dialog" data-id={note && note.id}><Card className={[classes.card, styles.card].join(' ')}>
            <CardActions className={classes.actions} disableActionSpacing>
                <IconButton onClick={this.state.remove} onTouchEnd={this.state.remove}>
                    <CloseIcon className={classes.svg} />
                </IconButton>
            </CardActions>
            <CardContent>
                <TextField required id="note-title" label="Title" defaultValue={note && note.title} />
                <div className={styles.richtext}>
                    <div className={styles.buttons}>
                        <BlockStyleControls editorState={editorState} onToggle={this.toggleBlockType} />
                        <InlineStyleControls editorState={editorState} onToggle={this.toggleInlineStyle} />
                    </div>
                    <div className={styles.textarea}>
                        <Editor editorState={editorState}
                            handleKeyCommand={this.handleKeyCommand}
                            keyBindingFn={this.mapKeyToEditorCommand}
                            onChange={this.onChange}
                            placeholder="What's on your mind..."
                            ref="editor"
                            spellCheck={true}
                        />
                    </div>
                </div>
                <TextField required id="note-labels" label="Labels" defaultValue={note && note.labels} />
                <CardActions className={classes.save}>
                    <Button className={classes.button} onClick={this.state.remove} onTouchEnd={this.state.remove}>Cancel</Button>
                    <Button color="primary" className={classes.button} onClick={this.state.save} onTouchEnd={this.state.save}>Save</Button>
                </CardActions>
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
    },
    save: {
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
    },
    button: {
        margin: theme.spacing.unit
    }
}))(NoteEditor);
