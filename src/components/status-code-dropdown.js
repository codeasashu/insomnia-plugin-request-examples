import React from 'react';
import autobind from 'autobind-decorator';
import { Dropdown, Button, DropdownItem, SvgIcon } from 'insomnia-components';
import * as constants from '../constants';

const CODE_PLACEHOLDER = 'Select status code';

@autobind
class StatusCodeDropdown extends React.PureComponent {

  _handleChange(statusCode) {
    statusCode = (parseInt(statusCode) || statusCode)
    this.props.onChange(statusCode);
  }

  _renderButton({ open }) {
    const {
      statuscode,
    } = this.props;

    return (
      <Button type="button">
        {statuscode || CODE_PLACEHOLDER} <i className="fa fa-caret-down" />
      </Button>
    );
  }

  render() {
    return (
      <Dropdown className="method-dropdown" renderButton={this._renderButton}>
        {Object.keys(constants.RESPONSE_CODE_REASONS).map(code => (
          <DropdownItem
            key={code}
            className={`http-status-${code}`}
            onClick={this._handleChange}
            value={code}>
            {code}
          </DropdownItem>
        ))}
      </Dropdown>
    );
  }
}

export default StatusCodeDropdown;