import React from 'react';
import autobind from 'autobind-decorator';
import {
    Card,
    CardContainer,
    Dropdown,
    Button,
    DropdownItem,
    SvgIcon,
} from 'insomnia-components'
@autobind
class ExampleHome extends React.PureComponent {

    async _handleDelete(example) {
        const { handleDelete } = this.props;
        if(confirm("Do you wish to delete?")) {
            await handleDelete(example);
            console.log('deleted example', example);
        }
    }

    _getMenuButton({ open }) {
        return (
            <Button>
                <SvgIcon icon="ellipsis" />
            </Button>
        );
    }

    _handleSetActiveExample(example) {
        const {
            handleSetActiveExample,
        } = this.props;

        handleSetActiveExample(example);
    }

    render() {
        const { examples } = this.props
        return (
            <div className={'pad pad-sm'}>
                <CardContainer>
                    {examples.map(example => (
                        <Card
                            key={example._id}
                            docTitle={example.title}
                            docBranch="feat/small-changes"
                            docLog="some"
                            docVersion="1.0"
                            tagLabel={example.status_code}
                            docMenu={
                            <Dropdown renderButton={this._getMenuButton}>
                                <DropdownItem
                                    className="danger"
                                    onClick={() => this._handleDelete(example)}>
                                    Delete
                                </DropdownItem>
                            </Dropdown>}
                            onClick={() => this._handleSetActiveExample(example)}
                        />
                    ))}
                </CardContainer>
            </div>
        )
    }
}

export default ExampleHome;