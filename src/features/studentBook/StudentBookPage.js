import {addStudentBookAction} from './state/StudentBookAction.js';
import {Component} from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";

class StudentBookPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newBookValue: '',
            books: []
        }
    }

    onNewBookChange = (event) => this.setState({newBookValue: event.target.value});
    onSubmitStudentBook = () => {
        this.props.addBookAction({
            student: this.props.student,
            book: this.state.books
        });
        this.setState({
            books: []
        })
    };
    onAddBook = () => {
        this.setState((prevState) => {
            return {
                books: [...prevState.books, this.state.newBookValue]
            }
        })
    };

    render() {
        return (
            this.props.view({
                newBookValue: this.state.newBookValue,
                handleAddBook: this.onAddBook,
                handleSubmit: this.onSubmitStudentBook,
                handleNewBookChange: this.onNewBookChange,
                student: this.props.student,
                books: this.state.books
            })
        )
    }
}

const mapDispatchToProps = {
    addBookAction: addStudentBookAction,
}
const mapStateToProps = state => {
    return {
        studentBook: state.bookReducer,
        student: state.studentReducer
    };
};
StudentBookPage.propTypes = {
    student: PropTypes.shape({
        name: PropTypes.string,
        age: PropTypes.number
    }).isRequired,
    studentBook: PropTypes.shape({
        student: PropTypes.string,
        books: PropTypes.arrayOf(PropTypes.string)
    }).isRequired,
    addAgeAction: PropTypes.func,
    changeNameAction: PropTypes.func,
    view: PropTypes.func
}
export default connect(mapStateToProps, mapDispatchToProps)(StudentBookPage);

