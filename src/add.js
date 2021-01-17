import React from 'react';
import autobind from 'autobind-decorator';
import {
    ExampleTitle,
    ExampleEditor,
    StatusCodeDropdown,
    ContentTypeDropdown,
}  from "./components"
import { CONTENT_TYPE_JSON } from "./constants"
import { Button } from 'insomnia-components';

const DEFAULT_STATUS_CODE = 200;

@autobind
class ExampleAdd extends React.PureComponent {

    constructor(props) {
        super(props)

        this.state = {
            title: null,
            content: null,
            status_code: DEFAULT_STATUS_CODE,
            content_type: CONTENT_TYPE_JSON
        }
    }

    _setTitleRef(n) {
        this._input = n;
    }

    _handleTitleChange(title) {
        this.setState({ title })
    }

    _handleBodyChange(content) {
        this.setState({ content })
    }

    _handleStatusCodeChange(status_code) {
        this.setState({ status_code })
    }

    _handleContentTypeChange(content_type) {
        this.setState({ content_type })
    }

    _handleSave() {
        const { onSave } = this.props
        onSave({...this.state})
    }

    render() {
        const {
            status_code,
            content_type,
            content,
            title,
        } = this.state
        console.log('val2', content)
        return (
              <div className={'pad pad-sm tall'} style={{fontSize: '12px'}}>
                <ExampleTitle value={title} handleChange={this._handleTitleChange} placeholder="Enter Title" />
                <div className={'form-control form-control--underlined form-control--wide'}>
                    <StatusCodeDropdown className={'pad pad-sm'} statuscode={status_code} onChange={this._handleStatusCodeChange} />
                    <ContentTypeDropdown className={'pad pad-sm'} contentType={content_type} onChange={this._handleContentTypeChange} />

                    <Button
                        className={'pad pad-sm'}
                        style={{float: 'right', clear: 'both'}}
                        bg="surprise"
                        variant="contained"
                        onClick={this._handleSave}>
                        Save
                    </Button>
                </div>
                <ExampleEditor
                    mode={content_type}
                    handleChange={this._handleBodyChange}
                    placeholder="Enter body"
                    defaultValue={content}
                />
              </div>
        )
    }
}

export default ExampleAdd;