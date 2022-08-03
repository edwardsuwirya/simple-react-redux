import AppButton from "../../components/AppButton";
import AppFormInput from "../../components/AppFormInput";
import {LABEL} from "../../app/constants";

const StudentBookView = (props) => {
    const {handleSubmit, student, newBookValue, handleNewBookChange, books} = props;
    return (
        <>
            <div style={{margin: '30px'}}>
                <h2>Book</h2>
                <div>{student.name}</div>
                <AppFormInput id='book' label={LABEL["Book.label"].value} value={newBookValue}
                              onValueChange={handleNewBookChange}/>
                <AppButton handleClick={handleSubmit} label={LABEL["StudentBook.submit"].value}/>
                <ul>
                    {books.map(book => <li key={book}>{book}</li>)}
                </ul>
            </div>
        </>
    )
}
export default StudentBookView;

