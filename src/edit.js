import autobind from 'autobind-decorator';
import ExampleAdd from "./add"

@autobind
class ExampleEdit extends ExampleAdd {

    _handleSave() {
        const { onSave, example } = this.props
        onSave({...this.state}, example._id)
    }

    componentDidMount() {
        console.log("opened", {...this.props.example})
        this.setState({...this.props.example})
    }
}

export default ExampleEdit;