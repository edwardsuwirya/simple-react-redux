import {addBookAction} from './state/actions.js';
import {Component} from "react";
import {connect} from "react-redux";
import StudentBookView from "./StudentBookView";

class StudentBook extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newBookValue: '',
            books: []
        }
    }

    onNewBookChange = (event) => this.setState({newBookValue: event.target.value});
    onSubmitStudentBook = () => this.props.addBookAction();
    onAddBook = (event) => {
        event.preventDefault();
        let newBook = event.target.value
        this.setState((prevState) => {
            prevState.books.push(newBook);
        })
    };

    render() {
        return (
            <StudentBookView handleAddBook={this.onAddBook} handleSubmitStudentBook={this.onSubmitStudentBook}
                             newBookValue={this.state.newBookValue}
                             student={this.props.student} handleNewBookChange={this.onNewBookChange}/>
        )
    }
}

const mapDispatchToProps = {
    addBookAction,
}
const mapStateToProps = state => {
    return {
        studentBook: state.bookReducer,
        student: state.studentReducer
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(StudentBook);

