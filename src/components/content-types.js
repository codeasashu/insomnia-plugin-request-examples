import React from 'react';
import autobind from 'autobind-decorator';
import { Dropdown, Button, DropdownItem, SvgIcon } from 'insomnia-components';
import * as constants from '../constants';

const CODE_PLACEHOLDER = 'Select content type';

@autobind
class ContentTypeDropdown extends React.PureComponent {

  _handleChange(statusCode) {
    this.props.onChange(statusCode);
  }

  _renderButton({ open }) {
    const {
      contentType,
    } = this.props;

    return (
      <Button type="button">
        {contentType || CODE_PLACEHOLDER} <i className="fa fa-caret-down" />
      </Button>
    );
  }

  render() {
    return (
      <Dropdown className="method-dropdown" renderButton={this._renderButton}>
        {Object.keys(constants.contentTypesMap).map(contentType => (
          <DropdownItem
            key={contentType}
            className={`response-contenttype-${contentType}`}
            onClick={this._handleChange}
            value={contentType}>
            {contentType}
          </DropdownItem>
        ))}
      </Dropdown>
    );
  }
}

export default ContentTypeDropdown;