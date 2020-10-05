// @flow
import * as React from 'react';
import autobind from 'autobind-decorator';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/yaml/yaml';
import { debounce } from "../utils"
import { DEBOUNCE_MILLIS, CONTENT_TYPE_PLAIN } from "../constants"
import CodeMirror from 'codemirror';

const TAB_SIZE = 4;

CodeMirror.defineMIME("application/json", {name: "javascript", json: true});
CodeMirror.defineMIME("application/x-json", {name: "javascript", json: true});
CodeMirror.defineMIME("application/ld+json", {name: "javascript", jsonld: true});
// CodeMirror.defineMIME("application/xml", {name: "javascript", jsonld: true});

const BASE_CODEMIRROR_OPTIONS = {
  lineNumbers: true,
  placeholder: 'Start Typing...',
  foldGutter: true,
  height: 'auto',
  autoRefresh: 2000,
  lineWrapping: true,
  scrollbarStyle: 'native',
  lint: true,
  matchBrackets: true,
  autoCloseBrackets: true,
  tabSize: TAB_SIZE,
  indentUnit: TAB_SIZE,
  hintOptions: null,
  dragDrop: true,
  viewportMargin: 30, // default 10
  selectionPointer: 'default',
  styleActiveLine: true,
  indentWithTabs: true,
  showCursorWhenSelecting: false,
  cursorScrollMargin: 12, // NOTE: This is px
  keyMap: 'default',
  // NOTE: Because the lint mode is initialized immediately, the lint gutter needs to
  //   be in the default options. DO NOT REMOVE THIS.
  gutters: ['CodeMirror-lint-markers'],
};


@autobind
class ExampleEditor extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  focusEnd() {
    this.codeMirror && this.codeMirror.focusEnd();
  }

  focus() {
    this.codeMirror && this.codeMirror.focus();
  }

  _codemirrorValueChanged() {
    const value = this.codeMirror.getDoc().getValue();
    if(this.props.handleChange) {
      this.props.handleChange(value);
    }
  }

  componentDidUpdate() {
    const { mode, defaultValue } = this.props
    if (mode != this.codeMirror.options['mode']) {
      this.codeMirror.setOption('mode', mode || CONTENT_TYPE_PLAIN);
    }

    if (defaultValue != this.codeMirror.getDoc().getValue()) {
      this.codeMirror.setValue(defaultValue || '');
    }
  }

  _handleInitTextarea(textarea) {

      if (!textarea) {
          // Not mounted
          return;
      }

      if (this.codeMirror) {
          // Already initialized
          return;
      }

      this.codeMirror = CodeMirror.fromTextArea(textarea, {
          ...BASE_CODEMIRROR_OPTIONS,
          // Add init options
      });

      this.codeMirror.on('changes', debounce(this._codemirrorValueChanged, DEBOUNCE_MILLIS));

      this.codeMirror.setCursor({ line: -1, ch: -1 });

      if(this.props.placeholder) {
        this.codeMirror.setOption('placeholder', this.props.placeholder);
      }

      console.log('val', this.props.defaultValue)

      this.codeMirror.setValue(this.props.defaultValue || '');

      this.codeMirror.setOption('mode', (this.props.mode || CONTENT_TYPE_PLAIN));

      setTimeout(() => {
          this.codeMirror.refresh();
      }, 100);
  }

  render() {
    const { defaultValue } = this.props
    return (
      <textarea
          key={'foo'}
          ref={this._handleInitTextarea}
          style={{ display: 'none' }}
          autoComplete="off"
          defaultValue={defaultValue}
      />
    );
  }
}

export default ExampleEditor;