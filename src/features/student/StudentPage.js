import {Component} from "react";
import {connect} from "react-redux";
import {addAgeAction, changeNameAction} from "./state/StudentAction";
import PropTypes from "prop-types";

class StudentPage extends Component {
    constructor(props) {
        super(props);
        this.state = {nameValue: ''};
    }

    onNameChange = (event) => this.setState({nameValue: event.target.value});

    onAddAgeClick = () => this.props.addAgeAction();

    onSubmit = () => this.props.changeNameAction(this.state.nameValue);

    render() {
        return (
            this.props.view({
                nameValue: this.state.nameValue,
                handleNameChange: this.onNameChange,
                handleSubmit: this.onSubmit,
                handleAddAgeClick: this.onAddAgeClick,
                student: this.props.student
            })
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
StudentPage.propTypes = {
    student: PropTypes.shape({
        name: PropTypes.string,
        age: PropTypes.number
    }).isRequired,
    addAgeAction: PropTypes.func,
    changeNameAction: PropTypes.func,
    view: PropTypes.func
}
export default connect(mapStateToProps, mapDispatchToProps)(StudentPage);
