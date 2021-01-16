import React from 'react';
import autobind from 'autobind-decorator';
import { v4 as uuidv4 } from 'uuid';
import { Breadcrumb, Header, Button } from 'insomnia-components';
import { EXAMPLE_HOME, EXAMPLE_ADD, EXAMPLE_EDIT } from './constants'
import ExampleHome from './home'
import ExampleAdd from './add'
import ExampleEdit from './edit'


const initialCrumb = ['Examples',]

@autobind
class ResponseExample extends React.PureComponent {

    constructor(props) {
        super(props)
        this.state = {
            activity: EXAMPLE_HOME,
            crumbs: initialCrumb,
            examples: [],
            currentEditingExample: null,
        };
    }

    _handleAddExample() {
        this.setState({
            activity: EXAMPLE_ADD,
            crumbs: [...initialCrumb, 'Add'],
            currentEditingExample: null,
        })
    }

    _handleBreadcrumb() {
        this.setState({
            activity: EXAMPLE_HOME,
            crumbs: initialCrumb,
            currentEditingExample: null
        })
    }

    _handleSetActiveExample(example) {
        this.setState({
            activity: EXAMPLE_EDIT,
            crumbs: [...initialCrumb, example.title],
            currentEditingExample: example
        })
    }

    async _handleExampleSave(example) {
        const { examples } = this.state;
        const _id = uuidv4().replace(/-/g, '');
        await this._setExamples([...examples, {...example, _id}])
        this.setState({ activity: EXAMPLE_HOME }) //Route to home after adding
    }

    async _handleExampleUpdate(example, exampleId) {
        const { examples } = this.state;
        let otherExamples = examples.filter(e => e._id !== exampleId)
        await this._setExamples([
            ...otherExamples,
            {...example, _id: exampleId}
        ])
        this.setState({ activity: EXAMPLE_HOME }) //Route to home after editing
    }

    async _handleDelete(example) {
        let _examples = this.state.examples;
        const remainingExamples = _examples.filter(e => e._id !== example._id)
        await this._setExamples(remainingExamples);
        this.setState({ activity: EXAMPLE_HOME }) //Route to home after deleting
    }

    async _getExamples() {
        const { store, request } = this.props
        let examples = await store.getItem(request._id)
        try {
            examples = JSON.parse(examples)
        } catch(e) {
            console.warn("[Request Example] Invalid examples found!!", e)
        } finally {
            examples = examples || []
        }
        console.log("examples", examples)
        this.setState({ examples })
    }

    async _setExamples(examples) {
        const { store, request } = this.props
        await store.setItem(request._id, JSON.stringify(examples))
        await this._getExamples()
    }

    async componentDidMount() {
        await this._getExamples()
    }

    render() {
        const { activity, crumbs, examples } = this.state;

        return (
            <React.Fragment>
                <Header
                    className="app-header"
                    gridLeft={
                        <React.Fragment>
                        <Breadcrumb
                            className="breadcrumb"
                            crumbs={crumbs}
                            onClick={this._handleBreadcrumb}
                        />
                        </React.Fragment>
                    }
                    gridRight={
                        <React.Fragment>
                            {activity === EXAMPLE_HOME && (
                                <Button
                                    onClick={this._handleAddExample}
                                    variant="outlined"
                                >Add example</Button>
                            )}
                        </React.Fragment>
                    }
                />
                {activity === EXAMPLE_HOME && (
                    <ExampleHome
                        wrapperProps={this.props}
                        examples={examples}
                        handleDelete={this._handleDelete}
                        handleSetActiveExample={this._handleSetActiveExample}
                    />
                )}

                {activity === EXAMPLE_ADD && (
                    <ExampleAdd
                        wrapperProps={this.props}
                        onSave={this._handleExampleSave}
                    />
                )}

                {activity === EXAMPLE_EDIT && (
                    <ExampleEdit
                        wrapperProps={this.props}
                        example={this.state.currentEditingExample}
                        onSave={this._handleExampleUpdate}
                    />
                )}
            </React.Fragment>
        )
    }
}

export default ResponseExample;