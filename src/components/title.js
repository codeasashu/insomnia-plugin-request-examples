import React from 'react';
import autobind from 'autobind-decorator';

const DEFAULT_PLACEHOLDER = 'Enter...'

@autobind
class ExampleTitle extends React.PureComponent {

    _setRef(inp) {
        this._input = inp
    }

    _handleChange(event) {
        const { handleChange } = this.props
        handleChange(event.target.value)
    }

    render() {
        return (
            <div className={'form-control form-control--underlined form-control--wide'}>
                <input
                    ref={this._setRef}
                    placeholder={this.props.placeholder || DEFAULT_PLACEHOLDER}
                    onChange={this._handleChange}
                    value={this.props.value || ''}
                />
            </div>
        )
    }
};

export default ExampleTitle;