// @flow
import * as React from 'react';
import autobind from 'autobind-decorator';

type Props = {
  onChange: Function,
  contentType: String,
  settings: Settings,
  handleGetRenderContext: Function,
};

@autobind
class ExamplesEditor extends React.PureComponent<Props> {
  constructor(props) {
    super(props);

    this.state = {
      editorContent: null,
    };
  }

  _handleRawChange(rawValue: string) {
    // const { onChange, request } = this.props;
    // onChange(request, newBody);
    this.props.onChange(rawValue);
    // this.setState({ editorContent: rawValue });
  }

  _setEditorRef(n) {
    this._editor = n;
  }

  focusEnd() {
    this._editor && this._editor.focusEnd();
  }

  focus() {
    this._editor && this._editor.focus();
  }

  render() {
    const {
      request,
      settings,
      contentType,
      content,
      handleGetRenderContext: getRenderContext,
    } = this.props;

    const uniqueKey = request._id;

    return (
      <CodeEditor
        ref={this._setEditorRef}
        uniquenessKey={uniqueKey}
        hideGutters
        hideLineNumbers
        dynamicHeight={true}
        manualPrettify
        noStyleActiveLine
        mode={contentType || 'application/json'}
        placeholder="Write a description"
        debounceMillis={300}
        keyMap={settings.editorKeyMap}
        fontSize={settings.editorFontSize}
        lineWrapping={settings.editorLineWrapping}
        indentSize={settings.editorIndentSize}
        defaultValue={content}
        getRenderContext={handleGetRenderContext}
        nunjucksPowerUserMode={settings.nunjucksPowerUserMode}
        isVariableUncovered={true}
        onChange={this._handleRawChange}
      />
    );
  }
}

export default ExamplesEditor;