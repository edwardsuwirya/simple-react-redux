import {Component} from "react";
import {connect} from "react-redux";
import {addAgeAction, changeNameAction} from "./state/StudentAction";

class StudentView extends Component {
    constructor(props) {
        super(props);
        this.state = {nameValue: ''};
    }

    handleNameChange = (event) => this.setState({nameValue: event.target.value});

    handleAddAgeClick = () => this.props.addAgeAction();

    handleSubmit = () => this.props.changeNameAction(this.state.nameValue);

    render() {
        const {student} = this.props
        return (
            <>
                <label>
                    Name:
                    <input type="text" value={this.state.nameValue} onChange={this.handleNameChange}/>
                </label>
                <button onClick={this.handleSubmit}>Change Name</button>
                <div>
                    <button onClick={this.handleAddAgeClick}>Add Age</button>
                </div>
                <div>{student.name} {student.age}</div>
            </>
        )
    }
}

const mapDispatchToProps = {
    addAgeAction,
    changeNameAction
}
const mapStateToProps = state => {
    return {student: state.studentReducer};
};
export default connect(mapStateToProps, mapDispatchToProps)(StudentView);
