import AppButton from "../../components/AppButton";
import AppFormInput from "../../components/AppFormInput";
import {LABEL} from "../../app/constants";
import withContainer from "../../components/withContainer";

const StudentBookView = (props) => {
    const {handleAddBook, handleSubmit, student, newBookValue, handleNewBookChange, books} = props;
    return (
        <>
            <div>{student.name}</div>
            <AppFormInput id='book' label={LABEL["Book.label"].value} value={newBookValue}
                          onValueChange={handleNewBookChange}/>
            <AppButton handleClick={handleAddBook} label={LABEL["AddBook.label"].value}/>
            <AppButton handleClick={handleSubmit} label={LABEL["StudentBook.submit"].value}/>
            <ul>
                {books.map(book => <li key={book}>{book}</li>)}
            </ul>
        </>
    )
}
export default withContainer('Student\'s Book', StudentBookView);

