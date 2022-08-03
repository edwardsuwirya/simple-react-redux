import {addStudentBookAction} from './state/StudentBookAction.js';
import {Component} from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import BookService from "../../services/BookService";

class StudentBookPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newBookValue: '',
        }
        this.service = BookService();
    }

    onNewBookChange = (event) => this.setState({newBookValue: event.target.value});
    onSubmitStudentBook = () => {
        this.props.addBookAction({
            student: this.props.student.name,
            book: this.state.newBookValue
        });
    };

    onPostStudentBook = async () => {
        try {
            const response = await this.service.postBook(this.props.studentBook);
            console.log(response);
        } catch (e) {
        }
    }

    render() {
        return (
            this.props.view({
                newBookValue: this.state.newBookValue,
                handleSubmit: this.onSubmitStudentBook,
                handleNewBookChange: this.onNewBookChange,
                handlePostBooks: this.onPostStudentBook,
                student: this.props.student,
                books: this.props.studentBook.books
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

