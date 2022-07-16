import {addStudentBookAction} from './state/StudentBookAction.js';
import {Component} from "react";
import {connect} from "react-redux";

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
export default connect(mapStateToProps, mapDispatchToProps)(StudentBookPage);

